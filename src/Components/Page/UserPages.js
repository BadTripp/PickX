import classes from "./Profile.module.css";
import db from "./../UI/Firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import HomeProfileINBar from "./HomeProfileINBar";

import UserStats from "./UserStats";
import UserWork from "./userWork";
import userWork from "./userWork";

const UserPages = (props) => {
  
  
const [View, setView] = useState(<UserStats></UserStats>);
  const UserProfile = () => {
    
    setView(<UserStats  Userid={props.userid} />);
  };

  const UserWork=()=>{

    setView(<userWork></userWork>);
  };
  

  return (
    <React.Fragment>
    <HomeProfileINBar Profile={UserProfile} Work={UserWork}></HomeProfileINBar>
    
    <div className={classes.userPages}>
        {View}
        </div>
    </React.Fragment>
  );
};

export default UserPages;
//className={classes.userPages}