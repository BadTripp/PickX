import { Card, ListGroup } from "react-bootstrap";
import Registerbadge from "../../Assets/BadgeRegister.png";
import db from "../UI/Firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import classes from "./Profile.module.css";


const UserStats = (props)=>{

    const [users, setUser] = useState([{ Username: "Loading" }]);
    const [ID, setID] = useState(0);
    
    
    useEffect(() => {
      
      onSnapshot(collection(db, "User"), (snapshot) => {
        setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        
      });
      return;
    }, []);


   
return <React.Fragment>


<div className={classes.text}>
    <Card style={{ width: "18rem"}} bg="grey" border="light" className="horizontal">
<ListGroup variant="flush">
    
  <ListGroup.Item>UserName:                    <b>{users[ID].Username}</b></ListGroup.Item>
  <ListGroup.Item>Email:                       <b>{users[ID].Email}</b></ListGroup.Item>
  <ListGroup.Item>Experience:                  <b>{users[ID].Experience}</b></ListGroup.Item>
  <ListGroup.Item>Picklevel:<b>{users[ID].Picklevel}</b></ListGroup.Item>
  <ListGroup.Item>EmployLevel:<b>{users[ID].EmployLevel}</b></ListGroup.Item>
  <ListGroup.Item>Thieflevel:<b>{users[ID].Thieflevel}</b></ListGroup.Item>
  <ListGroup.Item>Factory:{!users[ID].Factory ? (<b>no</b>) : (<b>si</b>)}</ListGroup.Item>
  
</ListGroup>

</Card>
    
    <div className={classes.badgecontainer}>
        <Card style={{opacity: "80%"}}className="mb-2" text="dark">
    <Card.Header><b>{users[ID].Username}</b>   </Card.Header>
    <Card.Body>
      <Card.Title>  Badge </Card.Title>
      <Card.Text>
            <img className={classes.badge} src={Registerbadge} title="Primo login,scavatore! "></img>
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
        <div className={classes.social}>
        <Card style={{ width: "18rem", opacity: "80%",background:"blue" }}  border="light" className="horizontal">
        <ListGroup variant="flush">
    
            <ListGroup.Item>       <h3>Friend List</h3></ListGroup.Item>
            <ListGroup.Item>       <b>No Friend</b></ListGroup.Item>
    
            </ListGroup>
            </Card>
            </div>
 </div>

</React.Fragment>
};
export default UserStats;