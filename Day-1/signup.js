import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
function signup()
{
    return(
        <div className="signup">
            <h2 className="head">Sign In</h2>
            <form>
                <input className='inpt1' type='email' placeholder='Email Id'></input>
                <p></p>
                <input className='inpt1' type='text' placeholder='Name'></input>
                <p></p>
                
                <input className='inpt1' type='text' placeholder='Phone Number'></input>
                <p></p>
                <input className='inpt1' type='password' placeholder='Password'></input>
                <p></p>
                <a href="http://192.168.56.1:3001"><button className='btn1' type='button'>Sign In</button></a>
                <p></p>
            </form>
        </div>
    );
}
export default signup;