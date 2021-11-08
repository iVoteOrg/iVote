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
                  <h1>Choti Video</h1>
                  <br/>
                  
                </div>
                <div className ="grid-item grid-item-2">
                  <form className = " form_format" >
                    <div>
                      <h3 style ={{textAlign: "center"}}>Log In</h3>
                    <label className ="left-shigt">ID</label>
                    <input placeholder="Enter your ID" type='text' name = "id" className ="form-control"/>
                    
                    <label className ="left-shigt">DOB</label>
                    <input placeholder="Enter your DOB" type='date' name = "user_email" className ="form-control"/>

                    <label className ="left-shigt">Password</label>
                    <input placeholder="Enter your Password" type='password' name = "password" className ="form-control"/>

                    <div className ="submit_btn_d">
                      <input className ="submit_btn" type = "submit" value = 'Login' />
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer/>
          </div>          
        )
    }
};