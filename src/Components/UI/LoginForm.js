import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import db from "./Firebase";
import {
  collection,
  onSnapshot,
} from "@firebase/firestore";


const LoginForm = (props) => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [isValidLogin, setIsValidLogin] = useState(true);

  const [users, setUser] = useState([]);

  useEffect(() => {
    console.log("Effect");
    onSnapshot(collection(db, "User"), (snapshot) => {
      setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    });
    return;
  }, []);

  const loginCheckData = () => {
      if(users.find(user=>user.Email === userEmail) && users.find(user=>user.Password === userPassword) )
      {
         const userID = users.findIndex(user=>user.Email === userEmail);
         props.onLoginUser(users,userID);
         
      }else{
          console.log("non loggato")
          setIsValidLogin(false);
      }

  };
  const onChangeEmail = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setUserEmail(event.target.value);
    
  };
  const onChangePassword = (event) => {
    event.preventDefault();
    setUserPassword(event.target.value);
    console.log(event.target.value);
    setIsValidLogin(true)
  };

  return (
    <Form>
        
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={userEmail}
          onChange={onChangeEmail}
          
        />
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={onChangePassword}
          
        />
        {!isValidLogin && <p style={{color:"red"}}>Wrong username or password</p>}
      </Form.Group>
      <Button variant="dark" type="button" onClick={loginCheckData}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
