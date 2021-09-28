import logoImg from "../../Assets/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import db from "./../UI/Firebase";
import {
  collection,
  onSnapshot,
} from "@firebase/firestore";
import React,{ useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";


const NavHomeProfile = (props) => {

    const [users, setUser] = useState([""]);

    useEffect(() => {
      console.log("Effect");
      onSnapshot(collection(db, "User"), (snapshot) => {
        setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
      return;
    }, []);

    const Username=users[props.index].Username;

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
            <Nav.Link  href="#tutorial">
                {console.log(props.index)}
                  Welcome {Username} !
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="SignUp" menuVariant="black">

            </NavDropdown>

            <NavDropdown title="Login" menuVariant="light">
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavHomeProfile;
