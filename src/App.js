import logo from "./logo.svg";
import NavigationBar from "./Components/UI/Nav";
import HomeCard from "./Components/Layout/Homecard";
import React, { useState } from "react";
import classes from "./Components/Layout/Homecard.module.css";
import { Placeholder } from "react-bootstrap";

import "./App.css";
import Tutorial from "./Components/Page/Tutorial";

function App() {
  const [isTutorialVisible, setTutorialVisible] = useState(false);
  const TutorialClose = () => {
    setTutorialVisible(false);
  };
  const TutorialOpen = () => {
    setTutorialVisible(true);
  };

  return (
    <React.Fragment>
      <NavigationBar onTutorial={TutorialOpen}></NavigationBar>

      {!isTutorialVisible && <HomeCard></HomeCard>}
      {isTutorialVisible && <Tutorial TutorialClose={TutorialClose}></Tutorial>}
    </React.Fragment>
  );
}

export default App;
