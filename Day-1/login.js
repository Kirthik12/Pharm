import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

import { useState } from 'react';
function login() {
  const [name,set_name]=useState("Login Your Account");
  function Validate(){
    var user_name=document.getElementById("u_name").value;

    var patrn = /\S+@\S+\.\S+/;
    if(!(patrn.test(user_name) && (user_name.includes(".com")||user_name.includes(".biz")||user_name.includes(".net")||user_name.includes(".in")))){
      set_name("Invalid email");
    }
    else{
      alert("Login Successful");
    }
    
  }
  
  return (
    <div className='log_main'>
      
      <form>
      <h2 classyName='head'>{name}</h2>
        <input className='inpt1' id="u_name" type='email' placeholder='Email Id'></input>
        <p></p>
        <input className='inpt1' type='password' placeholder='Password'></input>
        <p></p>
        <a className='link' href="www.google.com">Forgot password?</a>
        <p></p>
        <button className='btn1' type='button' onClick={Validate}>Login</button>
        <p></p>
        <p className='last'>Don't have an account?<Link to ="/signup"><span>Register</span></Link></p>
      </form>
    </div>
  );
}

export default login;