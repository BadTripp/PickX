import classes from "./Profile.module.css";
import { Button } from "react-bootstrap";
import React from "react";

const HomeProfile = (props) => {
  return (
    <div className={classes.fadein}>
      
      
      

      
        <Button class="btn btn-secondary float-right">Button</Button>
        <button classname={classes.btnLogout} variant="light" >Logout</button>
        
      
    </div>
  );
};

export default HomeProfile;