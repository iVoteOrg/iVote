import React from "react";
import{Nav,NavLink,Bars,NavMenu, NavBtn,NavBtnLink} from './Navitemscss';

const Navbars = () =>{
    return(
      <>
        <Nav>
          <NavLink to ="/">
            <h1>I-Vote</h1>
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