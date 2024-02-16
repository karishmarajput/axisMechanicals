// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../style/navbar.css';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div className="brand laptop">
          <img src={window.location.origin + '/images/logo.webp'} width="90" alt="Logo" /> 
      
          AXIS MECHANICAL
     
          </div>
          <div className="brand mobile">
          <img src={window.location.origin + '/images/logo.webp'} width="90" alt="Logo" /> 
      
       
     
          </div>
          
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active"><span>Home</span></NavLink>
            {/* <NavLink to="#aboutUs" className="nav-link" activeClassName="active">About Us</NavLink> */}
            <NavLink to="/services" className="nav-link" activeClassName="active"><span>Services</span></NavLink>
            <NavLink to="/project" className="nav-link" activeClassName="active"><span>Project</span></NavLink>
            <NavLink to="/contact-us" className="nav-link" activeClassName="active"><span>Contact Us</span></NavLink>
            <NavLink to="/join-us" className="nav-link" activeClassName="active"><span>Join Us</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
