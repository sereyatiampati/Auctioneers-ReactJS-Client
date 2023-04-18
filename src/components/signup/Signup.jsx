import React, { useState } from 'react';
import './signup.css';

function Signup({setUser}) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // let navigator = useNavigate();
    const [role, setRole] = useState(1);

    // identifying user role
    const vendorRole = () => setRole(2)
    const buyerRole = () => setRole(1)

    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            email,
            username,
            password,
            password_confirmation: passwordConfirmation,
            role_id: role,
          },
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((data) => {
            localStorage.setItem("jwt", data.jwt);
            setUser(data);
            console.log(user);
          });
          // navigator("/")
        } else {
          r.json().then((err) => {
            console.log(err.errors);
            setErrors(err.errors)
          });
        }
      });
    }  

  return (
    <body className="form-v2">
      <div className="page-content">
        <div className="form-v2-content">
          <div className="form-left">
            <img src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="form" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-detail"
            action="#"
            method="post"
            id="myform"
          >
            <h2>SIGN UP</h2>
            <div className="form-row">
          <label htmlFor="username">User Name:</label>
              <input
                type="text"
                name="username"
                id="username"
                className="input-text"
                placeholder="ex: Lindsey Wilson"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
        <div className="form-row">
          <label htmlFor="email">Your Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            className="input-text"
            required
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input-text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            name="password_confirmation"
            className="input-text"
            required
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <div className="login-link-container">
            <p>Already have an account? <a href="#">Sign in</a></p>
          </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="signup as Vendor"
                className="signup"
                value="Signup as Vendor"
                onClick={() => {
                  vendorRole();
                  
                }}
                
              />
            </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="signup as Buyer"
                className="signup"
                value="Signup as Buyer"
                onClick={() => {
                  buyerRole();
                }}
                
              />
            </div>
      </form>
    </div>
  </div>
</body>
  );
}

export default Signup;
