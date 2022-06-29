import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main.js"; 


class Content extends Component {
  render() {
    return (
        <Routes>
        <Route path="/register" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    );
  }
}

export default Content;