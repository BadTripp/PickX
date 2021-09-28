import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import logoImg from "../../Assets/logo.png";
import "./AnimationText.css";


import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const NavigationBar = (props) => {
  


  

  return <Navbar collapseOnSelect expand="sm" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img  alt="" src={logoImg}  />
            PickX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={props.onTutorial} href="#tutorial">How to play</Nav.Link>
            </Nav>
            <Nav>
            <NavDropdown title="SignUp" menuVariant="black" >
            <SignUpForm></SignUpForm>
            </NavDropdown>
             

              
              
              <NavDropdown title="Login" menuVariant="light">
            <LoginForm></LoginForm>
            </NavDropdown>
              
              
              
            
            
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  
};

export default NavigationBar;
