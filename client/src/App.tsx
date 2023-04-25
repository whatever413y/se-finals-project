import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register"
import Admin from "./screens/Admin";
import User from "./screens/User";

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </Router>
  );
};

export default App;