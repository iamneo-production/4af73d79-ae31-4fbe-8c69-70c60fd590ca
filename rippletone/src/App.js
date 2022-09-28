import Login from './login.js';
import React from 'react';
import Signup from './signup.js';
// import Admin from './Admin.jsx';

import {
  BrowserRouter as Router,
  Route,
  Routes  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      

        <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>

          </Routes>
        </div>
        
      
      </div>
    </Router>
  );
}

export default App;
