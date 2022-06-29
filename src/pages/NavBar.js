import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar style={{background: "burlywood"}} variant="dark" expand="lg">
        <Link to="/" style={{ textDecoration: 'none' }}><Navbar.Brand>FoodieJoy</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          
            <NavLink to="/register" className="nav-link">
                Register
            </NavLink>
 
            <NavLink to="/profile" className="nav-link">Hi</NavLink>

            <Nav.Link exact to="/">LogOut</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;