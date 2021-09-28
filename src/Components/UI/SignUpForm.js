import { useState } from "react";
import {Form,Button} from "react-bootstrap";

const SignUpForm =()=>{
    const [userEmail,setUserEmail]=useState();
    const [userPassword,setUserPassword]=useState();
    const [isValidForm,setIsValidForm]=useState();

    const loginCheckData =()=>{
            if(userEmail === "renato@123.it" &&  userPassword === "123")
            {
                console.log("Logged"+userEmail+userPassword);
            }else{
                setIsValidForm(true);
                console.log("NOTLogged"+userEmail+userPassword);
            }
            
    };
    const onChangeEmail=(event)=>{
        event.preventDefault();
        console.log(event.target.value);
        setUserEmail(event.target.value);
        setIsValidForm(false);
    };
    const onChangePassword=(event)=>{
        event.preventDefault();
        setUserPassword(event.target.value);
        console.log(event.target.value);
        setIsValidForm(false);
    };

    return ( 
    <Form >
    <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={onChangeEmail} isInvalid={isValidForm}/>
    <Form.Text className="text-muted" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  value={userPassword} onChange={onChangePassword} isInvalid={isValidForm}/>
    </Form.Group> 
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password Confirm</Form.Label>
      <Form.Control type="password" placeholder="Password"  value={userPassword} onChange={onChangePassword} isInvalid={isValidForm}/>
    </Form.Group>
    <Button variant="dark" type="button" onClick={loginCheckData}>
    SignUp
  </Button>
    </Form>
    )
};

export default SignUpForm;