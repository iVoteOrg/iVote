import React from "react";
import './styles/signin.css';
import Navbar from "./Navbar";
import Footer from './Footer';

export default class Signin extends React.Component{
    render(){
        return(
          <div id="signin">
            <div>
              <Navbar/>
              <div className ="grid-container">
                <div className ="grid-item grid-item-1">
                  Choti Video
                </div>
                
                
                <div className ="grid-item grid-item-2">
                  <form className = " cscscas" >
                  <h3 style ={{textAlign: "center"}}>Log In</h3>
                    <label className ="left-shigt">Email</label>
                    <input placeholder="Enter your Email-ID" type='email' name = "user_email" className ="form-control"/>
                    <label className ="left-shigt">Password</label>
                    <input placeholder="Enter your Password" type='password' name = "password" className ="form-control"/>
                    
                    <input type = "submit" value = 'Login'  style = {{marginTop: '30px'}}/>
                  </form>
                </div>
              </div>
            </div>
            <Footer/>
          </div>          
        )
    }
};