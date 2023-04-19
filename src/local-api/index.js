import { createServer, Model, ActiveModelSerializer, Response } from "miragejs";
import db from "./db.json";

const singularize = (word) => word.endsWith("s") ? word.slice(0, -1) : word;

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

      /*Add an artificial response delay*/
      this.routes = 2000

      this.post("/login", (schema, request)  => {
        const requestedUser = JSON.parse(request.requestBody);
        const results = schema.users.where(requestedUser)
        if (results.models.length  !== 0){
          return new Response(200,{},{ 'encodedToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'})
        } else{
          return new Response(401,{},{ errors: ["Not authorized"] })
        }
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
