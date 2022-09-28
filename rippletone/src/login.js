import React, { useState } from "react";
// import ReactDOM from "react-dom";
import axios from 'axios';
// import Home from './adminhome/Home';
import Aa from './aa.js'
// import Signup from './signup.js'

import "./login.css";

function Login() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  
  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleclick=  (e)=>{
    e.preventDefault();
    const obj={email,password};
    //if(obj.email==="admin@gmail.com" && obj.password === "admin1234")
    //  console.log("admin")
    //  else{
      // obj.email="team3";
      // obj.password="team3";
      //   console.log(obj);
      const url= "https://8080-cafafbaeabeacdeabfbaffeeeabbfbeab.examlyiopb.examly.io/login";  
  //    fetch ("https://8080-cafafbaeabeacdeabfbaffeeeabbfbeab.examlyiopb.examly.io/login2",{
  //      method:"POST",
  //      body:JSON.stringify(obj),
  //      headers:{"Content-Type":'application/json'}
       
  //  }).then(res=>{
  //    console.log(JSON.stringify(res));
  //    console.log(res);
  //  });
  const headers = {
    'Content-Type': 'application/json'
  }
  axios.post(
          url,
          JSON.stringify(obj),
          {"headers": headers}
  ).then(x=>{
    console.log(x.data);
    let a=x.data;
    console.log(a);
    if(a.message === "admin"){
      <Aa/>
    console.log("admin");
    }
    else if(a.message === "true"){
      console.log("is user")
    }
    else{
      <a href="/signup"> sign up</a>
      console.log("Not a User");
    }
  })

  


  // headers:{"Content-Type":"application/json"},
      

  //}
}
  

  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    
    const userData = database.find((user) => user.username === uname.value);

    
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } 
    else {
      
      handleclick()
    }
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      {/* onSubmit={handleSubmit} */}
      <form >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="email" id="email" size="10"  onChange={(e)=>setemail(e.target.value)} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" size="10" id="password" onChange={(e)=>setpassword(e.target.value)} required />
          {renderErrorMessage("pass")}
        </div>
        <div>
          Don't have an account?
          <a href="/signup"> sign up</a>
        </div>
        <div className="button-container">
        {/* <input type="button"  onClick={handleclick}/> */}
          <input type="submit" onClick={handleclick} />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;