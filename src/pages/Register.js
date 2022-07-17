import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from './../firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';

class Register extends Component {
    state = {
        email: "",
        password: "",
    }; 

    handleSignUp = () => {
        const {email, password} = this.state;
        console.log("Sign Up");
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
        console.log("Signed In")
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
        <div> Register Page </div >
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
      <Button onClick={() => this.handleSignUp()} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    );
  }
}

export default Register;