import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form,Button } from "react-bootstrap";
import useInput from "../hooks/useInput";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { register } from "../state/user";
/* import { log, success, error } from "../utils/logs";
 */
const NewUser = () => {
  const name = useInput();
  const dispatch=useDispatch()
  const email = useInput();
  const password = useInput();
  const history = useHistory();

  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch(register({name: name.value,
      email: email.value,
      password: password.value}))
    history.push("/login");
  };

  return (
    <div> 
        <Form onSubmit={handleSumbit} style={{marginTop: "5%",
    marginLeft: "30%",
    marginRight: "30%",
    marginBottom:" 5%",
    textAlign: "center"
}} >
        <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name address</Form.Label>
    <Form.Control type="name" placeholder="Enter name"  {...name} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  {...email} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  {...password} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
    </div>
  );
};

export default NewUser;
