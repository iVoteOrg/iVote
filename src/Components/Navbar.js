import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";

import{
  Nav,
  NavLink,
  Bars,
  NavMenu, 
  NavBtn,
  NavBtnLink
} from './Navitems';

const Navbars = () =>{
    return(
      <>
        <Nav>
          <NavLink to ="/">
            <h1>
              I-Vote
            </h1>
          </NavLink>
          <Bars/>
          <NavMenu>
            <NavLink to ='/about' activeStyle>
              About
            </NavLink>
            <NavLink to ='/team' activeStyle>
              Team
            </NavLink>
            <NavLink to ='/contact' activeStyle>
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to ='/signin'>SignIn</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
};
export default Navbars;