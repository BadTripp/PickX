import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logoImg from "../../Assets/logo.png";
import "./AnimationText.css";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Banner from "./Banner";
const NavigationBar = (props) => {

  const [registerComplete,setRegisterComplete]=useState(false);

  const LoginComplete = (user, id) => {
    props.onCompleteLogin(user, id);
  };
  const completeRegister=()=>{
      setRegisterComplete(true)
  }
  
  return (
    <Navbar collapseOnSelect expand="sm" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={logoImg} />
          PickX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={props.onTutorial} href="#tutorial">
              How to play
            </Nav.Link>
          </Nav>
          {registerComplete &&<Banner variant={"success"}>Successfully registered, you can now log in!</Banner>}
          <Nav>
            {!registerComplete && <NavDropdown title="SignUp"  menuVariant="black">
              <SignUpForm onRegister={completeRegister}></SignUpForm>
            </NavDropdown>}

            <NavDropdown title="Login" menuVariant="light">
              <LoginForm onLoginUser={LoginComplete}></LoginForm>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
};

export default NavigationBar;
