import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/signin.css';
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
// import Footer from './Footer';


export default class Signin extends React.Component{
    render(){
        return(
          <div>
            <div>
                <Card className="bg-dark text-white" id="signin">
                  <div className="center">
            <Navbar/>
                    <Card.Title className="big">Sign-in</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </Card>
            </div>
            
          </div>
          
        )
    }
};