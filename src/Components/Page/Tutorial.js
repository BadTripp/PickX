import classes from "./Tutorial.module.css";
import { Button } from "react-bootstrap";

const Tutorial = (props) => {
  return (
    <div className={classes.tutorial}>
      <h2>
        <b>PickX Tutorial</b>
      </h2>
      <p>Management game</p>
      <div className={classes.text}>
        <b><p>What can you do:</p></b>
        <li>Digging for minerals</li>
        <li>Buy a mineral excavation factory and find employees</li>
        <li>Loot diggers or factories</li>
        <li>Loot diggers or factories</li>
        <li>Loot diggers or factories</li>
        <li>Loot diggers or factories</li>
        <b><p>Goals:</p></b>
        <li>Loot diggers or factories</li>
        <li>Loot diggers or factories</li>
        <li>Loot diggers or factories</li>

        
      </div>
        
        <Button variant="dark" onClick={props.TutorialClose} >I'm ready!</Button>
        
      
    </div>
  );
};

export default Tutorial;
