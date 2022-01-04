import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";


export const ShowUsers = () => {
const data=useSelector((state)=>state.users)




if(data)  {
  return (
    <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "25%",
    width: "50%",
    height: "300px"}}>
    
      <hr></hr>
<div>
    <h1>Tabla de usuarios</h1>
    <br></br>
    <br></br>

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
      {data[0]?(
  data.map((user, i) => (
    <tr   key={i}>
  
      <td>{user.id }</td>     
      <td>{user.name }</td>
      <td>{user.email }</td>
    </tr>
  ) )):null}
    </tbody>
    </Table>
    </div>
    </div>
  );
}
}
