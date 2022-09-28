import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./login.css";


function Signup() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email,setemail]=useState('');
  const [username,setusername]=useState('');
  const [mobileNumber,setmobileNumber]=useState('');
  const [password,setpassword]=useState('');

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

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
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const handleclick=(e)=>{
      e.preventDefault()
      const obj={email,username,mobileNumber,password};
      const abc=fetch ("https://8080-cafafbaeabeacdeabfbaffeeeabbfbeab.examlyiopb.examly.io/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
    }).then(()=>{console.log("ok"+abc)})}
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="email" id="email" name="email"  onChange={(e)=>setemail(e.target.value)} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>User Name </label>
          <input type="text"  id="username" name="uname" onChange={(e)=>setusername(e.target.value)} required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Mobile Number </label>
          <input type="tel" id="mobileNumber" name="mnum" onChange={(e)=>setmobileNumber(e.target.value)} pattern ="[0-9]{10}"  required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" id="password" name="pass" onChange={(e)=>setpassword(e.target.value)} required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input type="password" id="confirmPassword" name="confpass"required />
          {renderErrorMessage("pass")}
        </div>
        
        <div className="button-container">
          <input type="submit"  onClick={handleclick} />
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

export default Signup;