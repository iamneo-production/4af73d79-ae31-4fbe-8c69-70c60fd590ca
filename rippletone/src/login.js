import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  // User Login info
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

  const handleclick=(e)=>{
    e.preventDefault()
    const obj={email,password};
    if(obj.email==="admin@gmail.com" && obj.password === "admin1234")
      console.log("admin")
      else{
    const abc=fetch ("https://8080-cafafbaeabeacdeabfbaffeeeabbfbeab.examlyiopb.examly.io/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(obj)
  }).then(res=>console.log(res))}}
  

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } 
    else {
      // Username not found
      handleclick()
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
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