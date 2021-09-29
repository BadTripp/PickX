import classes from "./Profile.module.css";
import db from "./../UI/Firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import HomeProfileINBar from "./HomeProfileINBar";
import { Card, ListGroup } from "react-bootstrap";
import UserStats from "./UserStats";
import userWork from "./userWork";
const UserPages = (props) => {
  
  
  
  const UserProfile = () => {
      
    setView(<UserStats/>);
  };

  const UserWork=()=>{

    setView(<userWork></userWork>);
  };
  const [View, setView] = useState(<UserStats/>);

  return (
      <React.Fragment>
    <HomeProfileINBar Profile={UserProfile} Work={UserWork}></HomeProfileINBar>
        
    <div className={classes.userPages}>{View}</div>
    </React.Fragment>
  );
};

export default UserPages;
