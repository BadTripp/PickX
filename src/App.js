import NavigationBar from "./Components/UI/Nav";
import HomeCard from "./Components/Layout/Homecard";
import React, { useState, useEffect } from "react";
import "./App.css";
import Tutorial from "./Components/Page/Tutorial";
import HomeProfile from "./Components/Page/HomeProfile";
import NavHomeProfile from "./Components/Page/NavHomeProfile";
import Banner from "./Components/UI/Banner";

function App(props) {
  const [isTutorialVisible, setTutorialVisible] = useState(false);
  const [isLogged, setIsLogged] = useState();
  const [id, setid] = useState();
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLogged");

    if (storedUserLoggedInInformation === "1") {
      setIsLogged(true);
      setid(localStorage.getItem("U_V"));
    } else {
      setIsLogged(false);
    }
  }, []);

  const TutorialClose = () => {
    setTutorialVisible(false);
  };
  const TutorialOpen = () => {
    setTutorialVisible(true);
  };

  const HomePageUser = (user, id) => {
    localStorage.setItem("isLogged", "1");
    localStorage.setItem("U_V", id);
    setIsLogged(true);
  };

  const Logout=()=>{
    localStorage.removeItem('isLogged');
    setIsLogged(false);
    return <Banner variant={"danger"}>Logout successful!</Banner>
  };
  return (
    <React.Fragment>
      
      {isLogged && <NavHomeProfile userLogout={Logout} index={id}></NavHomeProfile>}
      {!isLogged && (
        <NavigationBar
          onTutorial={TutorialOpen}
          onCompleteLogin={HomePageUser}
        ></NavigationBar>
      )}
      
      {isLogged && <HomeProfile></HomeProfile>}
      {!isTutorialVisible && !isLogged && <HomeCard></HomeCard>}
      {isTutorialVisible && <Tutorial TutorialClose={TutorialClose}></Tutorial>}
    </React.Fragment>
  );
}

export default App;
