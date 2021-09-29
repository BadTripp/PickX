import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import db from "./Firebase";
import {
  collection,
  onSnapshot,
  addDoc,
} from "@firebase/firestore";


const SignUpForm = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [isValidPassword, setIsValidPassword] = useState();
  const [isValidEmail, setIsValidEmail] = useState();
  const [isValidName, setIsValidName] = useState();
  const [isValidButton, setIsValidButton] = useState(true);
  const [isExistName, setIsExistUserName] = useState(false);
  const [users, setUser] = useState([]);

    useEffect(() => {
      console.log("Effect");
    onSnapshot(collection(db, "User"), (snapshot) => {
      setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  return 
  }, []);

  const add = async () => {
    //const docRef = doc(db, "User", Math.random().toString());

    const collectionRef = collection(db, "User");
    const payload = {
      Username:userName,
      Email: userEmail,
      Password: userPassword,
      Picklevel: 1,
      Thieflevel: 0,
      Factory: false,
      Experience: 0,
      EmployLevel: 0,
      Resources: ["", 0],
    };
    await addDoc(collectionRef, payload);
    console.log("yes");
  };

  
  const RegisterCheckData = () => {
    props.onRegister();
    
    add();
  };
  const onChangeEmail = (event) => {
    event.preventDefault();
    setUserEmail(event.target.value);
    if(event.target.value.includes("@"))
    {
      setIsValidEmail(false);
    }else{
      setIsValidEmail(true);
    }
    
  };
  const onChangeName = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
    
    if(users.find(user => user.Username === event.target.value))
    {
      setIsExistUserName(true);
    }else{
      setIsExistUserName(false);
      
    }
    if(event.target.value.length <= 0)
    {
      setIsValidName(true);
      
    }else{
      setIsValidName(false)
    }
    
  };
  const onChangePassword = (event) => {
    event.preventDefault();
    setUserPassword(event.target.value);
    if(event.target.value.length < 8)
    {
      setIsValidPassword(true);
      
    }else{
      setIsValidPassword(false);
    }
  };
  const onChangePasswordConfirm = (event) => {
    event.preventDefault();
    setUserPasswordConfirm(event.target.value);
    if(userPassword !== event.target.value)
    {
      setIsValidPassword(true);
      setIsValidButton(true);
    }else{
      setIsValidPassword(false);
      setIsValidButton(false);
    }
   
  };

  return (
    <Form >
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          value={userName}
          onChange={onChangeName}
          isInvalid={isValidName}
        />
        {isExistName && <p style={{color:"red"}}>The username is already used</p>}
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={userEmail}
          onChange={onChangeEmail}
          isInvalid={isValidEmail}
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
          isInvalid={isValidPassword}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Label>Password Confirm</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password Confirm"
          value={userPasswordConfirm}
          onChange={onChangePasswordConfirm}
          isInvalid={isValidPassword}
        />
      </Form.Group>
      <Button disabled={isValidButton} variant="dark" type="button" onClick={RegisterCheckData}>
        SignUp
      </Button>
    </Form>
  );
};

export default SignUpForm;
