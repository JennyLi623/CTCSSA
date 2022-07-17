import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from './../firebase.js';
import {signInWithEmailAndPassword} from 'firebase/auth';

class Login extends Component {
    state = {
        email: "",
        password: "",
    }; 

    handleLogin = () => {
        const {email, password} = this.state;
        console.log("Login");
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    // Signed inc
        const user = userCredential.user;
        console.log(userCredential);
    // ...
        })
          .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);  
  });

        }; 

    updateField = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
        console.log(this.state);
    };

    render() {
        const {email, password} = this.state;
    return (
        <div>
        <div> Login Page </div >
        <Form onSubmit={e => { e.preventDefault();}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        name="email"
        value={email}
        onChange={this.updateField}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        name="password"
        value={password}
        onChange={this.updateField}/>
      </Form.Group>
      <Button onClick={() => this.handleLogin()} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    );
  }
}

export default Login;