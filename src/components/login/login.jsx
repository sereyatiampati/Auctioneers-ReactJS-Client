import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { jwtLoginHandler, getJSONPayloadFromJwt } from '../../utilities/auth';

// import runServer from '../../mockserver';
// runServer();


const Login = ({user, setUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function loginSuccessCallback(base64EncodedToken) {
    const userParams = getJSONPayloadFromJwt(base64EncodedToken)
    setUser( userParams );
    if ( "buyer_id" in userParams ) {
      navigate('/auctions');
    } else if ( "seller_id" in userParams ) {
      navigate('/seller');
    }
  }

  async function loginFailureCallback(responsePromise) {
    const response = await responsePromise.json();
    setErrors(response.errors);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const loginRequestBody = { username, password };
    jwtLoginHandler(loginRequestBody, 'http://localhost:3000/login', loginSuccessCallback, loginFailureCallback);    
  }

    return (
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card bg-white">
              <div class="card-body p-5">
                <form class="mb-3 mt-md-4" onSubmit={handleSubmit}>
                  <h2 class="fw-bold mb-2 text-muted">Account Login</h2>
                  <p class=" mb-5 text-muted">Please enter your login details and password!</p>
                  <div class="mb-3">
                    <label htmlfor="username" class="form-label ">Username<span className='text-danger'>*</span></label>
                    <input type="text" class="form-control" id="username" name="username" onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                  <div class="mb-3">
                    <label htmlfor="password" class="form-label ">Password<span className='text-danger'>*</span></label>
                    <input type="password" class="form-control" id="password"name="password" onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <p class="small"><a class="text-muted" href="#">Forgot password?</a></p>
                  <div class="d-grid">
                    <button className="btn btn-outline-primary" type="submit">
                        Log in
                    </button>
                  </div>
                  {
                    errors?.length > 0 ? errors.map((error)=><p style={{color: "red", fontSize: "12px"}} className = "text-center" key={error}>{error}</p>) : ""
                  }
                </form>
                <div>
                  <p class="mb-0  text-center">Don't have an account? <Link to='/signup' class="text-primary fw-bold">Sign
                      Up</Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;