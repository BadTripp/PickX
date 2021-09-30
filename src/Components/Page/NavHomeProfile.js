import logoImg from "../../Assets/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import db from "./../UI/Firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const NavHomeProfile = (props) => {
  const [users, setUser] = useState([{ Username: "Loading.." }]);
  const [ID, setID] = useState(0);

  useEffect(() => {
    onSnapshot(collection(db, "User"), (snapshot) => {
      setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setID(localStorage.getItem("U_V"));
    });
    return;
  }, []);

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
            <Nav.Link href="#Welcome">
              Welcome <b> {users[ID].Username}</b> to  PickX !
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger" onClick={props.userLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavHomeProfile;
