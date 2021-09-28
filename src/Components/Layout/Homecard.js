import { Card,Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import logoImg from "../../Assets/logo.png";
import classes from "./Homecard.module.css";

const HomeCard = (props) => {
  return (
    <div className={classes.box}>
    <Card style={{ width: "25rem"}}>
      <Card.Img variant="top" src={logoImg} />
      <Card.Body>
        <Card.Title>Update 0.1</Card.Title>
        <Card.Text>
        View the changelog of the latest update
        </Card.Text>
        <Button variant="primary">Visualizza</Button>
      </Card.Body>
    </Card>
    </div>
  );
};
export default HomeCard;
