import { Children } from "react";
import { Alert } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const Banner =(props)=>{
return (
    <Alert variant={props.variant}>{props.children}</Alert>)

};
export default Banner;