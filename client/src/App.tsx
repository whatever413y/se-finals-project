import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

const App: React.FC = () => {
  return (
    <Router basename="/index.html">
      <div>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </div>
  
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
  );
};

export default App;