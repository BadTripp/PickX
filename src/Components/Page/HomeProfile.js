import classes from "./Tutorial.module.css";
import { Button } from "react-bootstrap";
import React from "react";

const HomeProfile = (props) => {
  return (
    <div className={classes.tutorial}>
      <h2>
        <b>PickX Tutorial</b>
      </h2>
      <p>Management game</p>
      <div className={classes.text}>   

      </div>
        
        <Button variant="dark" >I'm ready!</Button>
        
      
    </div>
  );
};

export default HomeProfile;