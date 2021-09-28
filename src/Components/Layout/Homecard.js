import { Card,Button } from "react-bootstrap";

import logoImg from "../../Assets/logo.png";
import classes from "./Homecard.module.css";

const HomeCard = (props) => {
  return (
    <div className={classes.box}>
    <Card style={{ width: "25rem"}} className={classes.card}>
      <Card.Img  className={classes.card}variant="top" src="https://uploads.gamedev.net/gallery/monthly_2021_01/0ee4d4d3d3be4551b2a2688b8cb47b60.GL-001.gif" />
      <Card.Body>
        <Card.Title>Update 0.1</Card.Title>
        <Card.Text>
        View the changelog of the latest update
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
    </div>
  );
};
export default HomeCard;
