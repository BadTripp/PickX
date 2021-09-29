import classes from "./Profile.module.css";
import { Nav,NavDropdown} from "react-bootstrap";
import db from "../UI/Firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import React, { useState, useEffect } from "react";

const HomeProfileINBar = (props) => {
    

 

  

  return (
    <div className={classes.fadein}>
       <Nav className={classes.ProfileBar} bg="black" activeKey="1"  >
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/Profile" onClick={props.Profile}>
          Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" onClick={props.Work}>
          Work
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" onClick={props.Market} >
          Market
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
      

      

      
        
        
      
    </div>
  );
};

export default HomeProfileINBar;