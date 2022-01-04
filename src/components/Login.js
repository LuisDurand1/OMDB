import React from "react";
import useInput from "../hooks/useInput";
/* import { Link } from "react-router-dom"; */
import axios from "axios";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import { useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state/user";
import { favoriteMovies } from "../state/favorite";
import { useEffect } from "react";
import { Form , Button } from "react-bootstrap";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch(login({ email: email.value, password: password.value }))
      .then((res) => res.data)
      .then(() => history.push("/"));
  };

  return (
      <div>
        <Form onSubmit={handleSumbit} style={{marginTop: "5%",
    marginLeft: "30%",
    marginRight: "30%",
    marginBottom:" 5%",
    textAlign: "center"
}} >
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

export default Login;
