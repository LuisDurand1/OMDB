import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput";
import Movies from "../commons/Movies";
import { Route, useHistory, useLocation } from "react-router";
import MovieInfo from "../commons/MovieInfo";
import { useEffect } from "react/cjs/react.development";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/user";
import * as ReactBootstrap from "react-bootstrap";

const Navbar = () => {
  const history = useHistory();
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
 const location=useLocation()
 

  const handleClick = (e) => {
  dispatch(logout())
    history.push("/");
  };

  if (user.id) {
    return (
        
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginTop:"-5px"}}>
  <ReactBootstrap.Container>
  <Link to="/" style={ {textDecoration:"none"}}> <ReactBootstrap.Navbar.Brand  style={ {marginBottom:"-10px" , marginLeft:"-10px"}}>OMDB</ReactBootstrap.Navbar.Brand></Link>  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="me-auto">
     <Link to="/favorite" style={ {textDecoration:"none"}}> <ReactBootstrap.Nav.Link href="#features">Favorites</ReactBootstrap.Nav.Link></Link>
     <Link to="/showusers" style={ {textDecoration:"none"}}> <ReactBootstrap.Nav.Link href="#pricing">Users</ReactBootstrap.Nav.Link></Link>
     
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets"></ReactBootstrap.Nav.Link>
      <Link to="/" style={ {textDecoration:"none"}}> <ReactBootstrap.Nav.Link eventKey={2} href="#memes" onClick={handleClick}>
        Logout
      </ReactBootstrap.Nav.Link></Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Container>
</ReactBootstrap.Navbar> 
    );
  } else {
    return (
     
      <div>
<ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"style={{marginTop:"-5px"}}>
  <ReactBootstrap.Container>
 <Link to="/" style={ {textDecoration:"none"}}> <ReactBootstrap.Navbar.Brand  style={ {marginBottom:"-10px" , marginLeft:"-10px"}}>OMDB</ReactBootstrap.Navbar.Brand></Link>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="me-auto">
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
    <Link to="/register"style={ {textDecoration:"none"}}>  <ReactBootstrap.Nav.Link href="#deets">Register</ReactBootstrap.Nav.Link></Link>
    <Link to="/login"style={ {textDecoration:"none"}}>  <ReactBootstrap.Nav.Link eventKey={2} href="#memes">Login
      </ReactBootstrap.Nav.Link></Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Container>
</ReactBootstrap.Navbar>
        <Movies />
        </div>

    );
  }
};

export default Navbar;



