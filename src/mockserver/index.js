import { createServer, Model, ActiveModelSerializer, Response } from "miragejs";
import db from "./db.json";
import * as jose from "jose"

const singularize = (word) => word.endsWith("s") ? word.slice(0, -1) : word;
const serverJwtB64Secret = new TextEncoder().encode(
  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);

function makeModels(db) {
  const models = {};
  for (const resource in db) {
    const model = singularize(resource);
    models[model] = Model;
  }
  return models;
}

function runServer() {
  createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: makeModels(db),

    seeds(server) {
      for (const resource in db) {
        const model = singularize(resource);
        for (const item of db[resource]) {
          server.create(model, item);
        }
      }
    },

    routes() {
      this.logging = true;
      this.routes = 2000;
      /*localhost prefix required as web-crypto browser api will only run in localhost and https browser environments*/
      this.urlPrefix = "http://localhost:5173";

      this.post("/login", async (schema, request)  => {
        const requestedUser = JSON.parse(request.requestBody);
        const results = schema.users.where(requestedUser)

        if (results.models.length  === 1){
          // console.log(results)
          const roleName = results.models[0].role_id === 1 ? 'buyer' : 'seller';
          const jwt = await new jose.SignJWT({role: roleName})
                                .setProtectedHeader({ alg: "HS256" })
                                .setSubject(results.models[0].attrs.id)
                                .setIssuedAt()
                                .setExpirationTime('2h')
                                .sign(serverJwtB64Secret); 
          return new Response(200,{},{encodedToken: jwt})
        } else{
          return new Response(401,{},{ errors: ["Not authorized"] })
        }
      });

      this.get("/me", async (schema, request)  => {
        try {
          const token = request.requestHeaders['Authorization'].split(' ')[1];
          const { payload, protectedHeader } = await jose.jwtVerify(token, serverJwtB64Secret)
          console.log(payload, protectedHeader)
          return new Response(200,{},{})
        } catch (error) {
          return new Response(401,{},{ errors: ["Not authorized"] })
        }
        
        
        return new Response(401,{},{ errors: ["Not authorized"] })
      });
      
      for (const resource in db) {
        this.get(`/${resource}`);
        this.get(`/${resource}/:id`);
        this.post(`/${resource}`);
        this.patch(`/${resource}/:id`);
        this.del(`/${resource}/:id`);
      }

      /*Mock only the above endpoints explicitly defined*/
      this.get('/**', this.passthrough);
      this.post('/**', this.passthrough);
      this.patch('/**', this.passthrough);
      this.del('/**', this.passthrough);
    },
  });
}

export default runServer;