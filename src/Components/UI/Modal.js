import React from "react";
import classes from "./ErrorModal.module.css";
const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>props.text</p>
      </div>
      <footer className={classes.actions} >
          <button>props.buttonMessage</button>
      </footer>
    </Card>
  );
};
