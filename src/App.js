
import NavigationBar from "./Components/UI/Nav";
import HomeCard from "./Components/Layout/Homecard";
import React, { useState } from "react";



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
    <body>
      <NavigationBar onTutorial={TutorialOpen}></NavigationBar>

      {!isTutorialVisible && <HomeCard></HomeCard>}
      {isTutorialVisible && <Tutorial TutorialClose={TutorialClose}></Tutorial>}
      </body>
  );
}

export default App;
