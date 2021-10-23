import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/signin.css';
import Card from "react-bootstrap/Card";

export default class Signin extends React.Component{
    render(){
        return(
<Card className="bg-dark text-white" id="signin">
  <div className="center">
    <Card.Title className="big">Sign-in</Card.Title>
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