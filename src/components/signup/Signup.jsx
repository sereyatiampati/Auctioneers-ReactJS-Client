import React from 'react';
import './signup.css';

function Signup() {
  return (
    <body className="form-v2">
      <div className="page-content">
        <div className="form-v2-content">
          <div className="form-left">
            <img src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="form" />
          </div>
          <form
            className="form-detail"
            action="#"
            method="post"
            id="myform"
          >
            <h2>SIGN UP</h2>
            <div className="form-row">
          <label htmlFor="full_name">Full Name:</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                className="input-text"
                placeholder="ex: Lindsey Wilson"
              />
            </div>
        <div className="form-row">
          <label htmlFor="your_email">Your Email:</label>
          <input
            type="text"
            name="your_email"
            id="your_email"
            className="input-text"
            required
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
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
          />
        </div>
        <div className="form-row">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="input-text"
            required
          />
        </div>
        <div className="login-link-container">
            <p>Already have an account? <a href="#">Sign in</a></p>
          </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="signup as Seller"
                className="signup"
                value="Signup as Seller"
              />
            </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="signup as Buyer"
                className="signup"
                value="Signup as Buyer"
              />
            </div>
      </form>
    </div>
  </div>
</body>
  );
}

export default Signup;
