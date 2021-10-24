import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default class Navbars extends React.Component{
    render(){
        return(
            <>
            <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Sign-in
">Sign-in
</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Team">Team</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  </>
  )
 }
};