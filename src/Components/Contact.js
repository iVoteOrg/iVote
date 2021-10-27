import React from "react";
import "./styles/contact.css";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import emailjs from "emailjs-com"

export default class Contact extends React.Component{
    render(){
        function sendEmail(e) 
        {
          e.preventDefault();
          
          emailjs.sendForm('service_kl0bsi8','template_dnz9j01',e.target,'user_ZcGC8TjgkvbwwxP1FiSnw')
          .then(res=>{
            console.log(res)
          }).catch(res=>{
            console.log(res)
          })
        }
        return(
          <div id="contact" className="center ">
            <Navbar/>
            <div className="container border" style={{marginTop:"50px",width:'50%',backgroundPosition:'center',backgroundSize:'cover'}}>
              <h1 style = {{marginTop:'25px'}}>Contact Form</h1>
              <form className = "row" style ={{margin:"25px 85px 75px 100px"}} onSubmit= {sendEmail}>
                <label>First Name</label>
                <input type='text' name = "name"/>
                <br/>
                <br/>
                <label>Email</label>
                <input type='email' name = "user_email" className ="form-control"/>
                <br/>
                <br/>
                <label>Message</label>
                <textarea name = "message" rows = '4' className ="form-control"/>
                <input type = "submit" value = 'Send' className ="form-control btn btn-primary" style = {{marginTop: '30px'}}/>
              </form>
            </div>
          </div>
        )
    }
};