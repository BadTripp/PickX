import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  InputGroup,
  Form,
} from "react-bootstrap";
import classes from "./Navbar.module.css";
import logoImg from "../../Assets/logo.png";
import "./AnimationText.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const NavigationBar = (props) => {
  const [onLogin,setOnLogin]=useState(true);


  const onButtonLogin=()=>{
    setOnLogin(false);
    console.log(onLogin);
  };

  return <React.Fragment>
      <Navbar collapseOnSelect expand="sm" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoImg} />
            PickX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={props.onTutorial} href="#features">How to play</Nav.Link>
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
    </React.Fragment>
  
};

export default NavigationBar;
