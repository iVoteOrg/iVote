import React from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com"
import "./particle/ParticleScreen.css";
import ParticleBackground from "./particle/ParticleBackground";
import './styles/contact.css'

export default class Contact extends React.Component{
    render(){
        function sendEmail(e) 
        {
          e.preventDefault();
          
          emailjs.sendForm('service_kl0bsi8','template_dnz9j01',e.target,'user_ZcGC8TjgkvbwwxP1FiSnw')
          .then(res=>{
            window.location.reload();
            alert("Your Message Has been sent to the Admin");
            console.log(res)
          }).catch(res=>{
            console.log(res)
          })
        }


        return(
          <div id="contact" className="center ">
              <div className = "Particle_screen" id = "particle">
                <Navbar/>
                  <ParticleBackground />
                  <div id="text_div center_all">
                      <div className="center_all">
                          <div>
                          <h1 className ="h1-tag" style = {{marginTop:'25px'}}>
                            Contact Form
                          </h1>
                          <form className = "row cscscas" onSubmit= {sendEmail}>
                            <label className ="left-shigt">First Name</label>
                            <input placeholder="Enter your name" type='text' name = "name"/>
                            <label className ="left-shigt">Email</label>
                            <input placeholder="Enter your Email-ID" type='email' name = "user_email" className ="form-control"/>
                            <label className ="left-shigt">Message</label>
                            <textarea placeholder="Enter your Message" name = "message" rows = '4' className ="form-control"/>
                            <input type = "submit" value = 'Send' className ="form-control btn btn-primary" style = {{marginTop: '30px'}}/>
                          </form>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
};