import './login-form.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [submitRespondPending, setSubmitRespondPending] = useState(false);

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
            navigate("/dashboard");
        } else if (response['status'] === 401){
            console.log('Invalid username or password')
            setLoginError('Invalid username or password')
        } else {
            console.log('Other login error')
            setLoginError('Login error')
        }
    }

    return (
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
                        <button className="btn-theme-color py-2 rounded-lg" type="submit">{(submitRespondPending===true)?<div class="spinner-border spinner-border-sm" role="status" />:"Log in"}</button>
                    </div>
                    {(loginError.length > 0)&&<p  className="theme-font text-danger">{loginError}</p> }
                </form>
            </div>
        </div>
    );
};

export default LoginForm;