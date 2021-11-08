import React from "react";
import './styles/signin.css';
import Navbar from "./Navbar";
import Footer from './Footer';
import ParticleBackground from "./particle/ParticleBackground";
import './styles/contact.css';

export default class Signin extends React.Component{
    render(){
        return(
          <div className = "contact_pageeee">
            <div id="signin" className="center">
              <div className = "Particle_screen" id = "particle">
                <Navbar/>
                  <ParticleBackground />
                  <div id="text_div center_all">
                      <div className="center_all">
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
              </div>
              <Footer/>
              </div>
              </div>
        )
    }
};