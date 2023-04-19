import './login.css';
import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
// import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

// fake JSON API
// import runServer from "../../mockserver"
// runServer()

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
    <div>
        {/* <Header value={value}/> */}
        <div className="extend-height">
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow align-middle">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlfor="username" className="form-label color-655DBB"><strong>Username</strong></label>
                                        <input type="text" className="form-control" id="username" name="username" value={username} placeholder="Username*" onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="password" className="form-label color-655DBB"><strong>Password</strong></label>
                                        <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="d-grid gap-2 mb-2">
                                        <button className="btn-theme-color py-2 rounded-lg" type="submit">{(submitRespondPending===true)?<div className="spinner-border spinner-border-sm" role="status" />:"Log in"}</button>
                                    </div>
                                    {(loginError.length > 0)&&<p  className="theme-font text-danger">{loginError}</p> }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default Login;