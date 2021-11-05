import React from "react";
import '../styles/navbar.css'
import {Container, Navbar, Nav, Button} from 'react-bootstrap'

const Navbars = () =>{
    return(
      <>
        <Navbar expand="lg" className="navbar-expand-sm bg-dark navbar-dark fixed-top">
          <Container className="justify-content-center">
            <Navbar.Brand href="/">i-Vote</Navbar.Brand>
          </Container>
          <Container className="p">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/contact">Update Info</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Button href="/" className="ml-4">Log-Out</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};
export default Navbars;