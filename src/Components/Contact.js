import React from "react";
import "./styles/contact.css";
import Card from "react-bootstrap/Card";


export default class Contact extends React.Component{
    render(){
        return(
<Card className="bg-dark text-white" id="contact">
  <div className="center">
    <Card.Title className="big">Contact</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </div>
</Card>
        )
    }
};