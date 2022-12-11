import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register"
import Admin from "./screens/Admin";

const App: React.FC = () => {
  return (
    <Router basename="/index.html">
      <div>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </div>
  
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </Router>
  );
};

export default App;