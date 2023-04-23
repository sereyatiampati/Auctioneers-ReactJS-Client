import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault()
      setErrors([])
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) =>{
            console.log(user)
            if(user.user_type=="Buyer"){
              navigate("/auctions");
              console.log(user);
            }else if(user.user_type=="Seller"){
                navigate("/seller");
                // setUser(data);
            }
            });
            setUsername("")
            setPassword("")
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
      setPassword("")
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
                            errors?.length > 0 ? errors.map((error)=><li style={{color: "red", fontSize: "12px"}} key={error}>{error}</li>) : ""
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