import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main.js"; 
import Login from "./Login.js";
import Register from "./Register.js"; 

class Content extends Component {
  
  
  render() {
    return (
        <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    );
  }
}

export default Content;