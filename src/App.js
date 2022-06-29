import React, { Component } from "react"; 
import logo from './logo.svg';
import './App.css';
import NavBar from './pages/NavBar';
import Content from './pages/Content'; 

class App extends Component {
  constructor(props){
    super(props); 

    this.state = {}; 
    }

  render() {
    return (
      <div>
        <NavBar /> 
  
        <Content /> 
      </div>
    ); 
  }


}

export default App;
