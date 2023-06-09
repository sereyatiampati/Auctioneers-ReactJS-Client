import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import API_BASE_URL from '../../utilities/env';
import { jwtSignupHandler } from '../../utilities/auth';
import './signup.css'

function Signup({setUser}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [user_type, setUserType] = useState("");
    const [errors, setErrors] = useState([]);

    function signupSuccessCallback() {
        navigate('/login');
    }
  
    async function signupFailureCallback(responsePromise) {
      const response = await responsePromise.json();
      setErrors(response.errors);
    }

    const handleSignupSubmit = async (evt) => {
    evt.preventDefault();
    const formData = { username, email, password, password_confirmation, user_type };
    console.log(formData)
    // eslint-disable-next-line max-len
    jwtSignupHandler(formData, `${API_BASE_URL}/signup`, signupSuccessCallback, signupFailureCallback);
    }


    return (
<>
    <form class="container" onSubmit={handleSignupSubmit} style={{margin: "50px 350px"}}>
        <div class="signup-card" style={{ height: "650px"}}>
            <div class="user signup_form">
                <div class="form">
                    <div class="text_signup">
                        <h3>Create An Account</h3>
                        <h4 className='text-muted'>Sign up for free</h4>
                        <p>Already have an account <a href="#" class="signin-click" onClick={()=>navigate ('/login')}>Sign In</a></p>
                    </div>
                    <div class="input-text-signup"> 
                        <input type="text" name="username" onChange={(e)=> setUsername(e.target.value)} required/> 
                        <i class="fa fa-user"></i> 
                        <label>Username<span style={{color: 'red'}}>*</span></label> 
                    </div>

                    <div class="input-text-signup"> 
                        <input type="text" name="email" required onChange={(e)=> setEmail(e.target.value)}/> 
                        <i class="fa fa-envelope-o"></i> 
                        <label>E-mail<span style={{color: 'red'}}>*</span></label> 
                    </div>

                    <div class="input-text-signup"> 
                        <input type="password" className="password_input" name="password"  required onChange={(e)=> setPassword(e.target.value)}/> 
                        <i class="fa fa-eye-slash"></i> <label>Password<span style={{color: 'red'}}>*</span></label> 
                    </div>

                    <div class="input-text-signup">
                        <input type="password" className="password_input" required name="password_confirmation" onChange={(e)=> setPasswordConfirmation(e.target.value)} /> 
                        <i class="fa fa-eye-slash"></i> <label>Confirm Password<span style={{color: 'red'}}>*</span></label>
                    </div>

                    <select class="input-text-signup form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e)=> setUserType(e.target.value)}>
                        <option  selected disabled>Choose Account type</option>
                        <option >Buyer</option>
                        <option>Seller</option>
                    </select>
                    {
                        errors?.length > 0 ? errors.map((err) => (<li style={{color: "red", fontSize: "12px"}}key={err}>{err}</li>)) : ""
                    }
                    <div class="signup-button"> <button type='submit'>Sign up</button> </div>
                    <div class="policy">
                        <p>By clicking Sign up, you agree to our<a href="#">Terms and Conditions</a>.</p>
                    </div>
                </div>
                <div class="image-box"> <img src="https://media.istockphoto.com/id/1011430662/photo/bid-button-on-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=32NdAneAoQm6eFwlI5msMfH-_d5-XYpkdhUIK3jZH_8="/> </div>
            </div>
        </div>
    </form>
    </>
    )
}
export default Signup;