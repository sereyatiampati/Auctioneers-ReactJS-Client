import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = ({value}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [submitRespondPending, setSubmitRespondPending] = useState(false);

    const setLoggedIn = value[1];

    const navigate = useNavigate();

    const handleSubmit = async(evt) => {
        setSubmitRespondPending(true)
        evt.preventDefault();

        const loginRequestHeader = { "Content-Type": "application/json"};
        const loginRequestBody = { username: username, password: password};
        
        let response = undefined
        
        try {
            response = await fetch("/login", {
                method: "POST",
                headers: loginRequestHeader,
                body: JSON.stringify(loginRequestBody),
              });
        } catch (error){
            console.log("errors")
        }

        setSubmitRespondPending(false)
        if (response?.ok) {
            console.log('success')
            setLoggedIn(true)
            navigate("/dashboard");
        } else if (response['status'] === 401){
            setLoginError('Invalid username or password')
        } else {
            setLoginError('Login error')
        }
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
                    <input type="text" class="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                  <div class="mb-3">
                    <label htmlfor="password" class="form-label ">Password<span className='text-danger'>*</span></label>
                    <input type="password" class="form-control" id="password"name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <p class="small"><a class="text-muted" href="#">Forgot password?</a></p>
                  <div class="d-grid">
                    <button className="btn btn-outline-primary" type="submit">
                        {(submitRespondPending===true)?<div className="spinner-border spinner-border-sm" role="status" />:"Log in"}
                    </button>
                  </div>
                  {(loginError.length > 0)&&<p  className="theme-font text-danger">{loginError}</p> }
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