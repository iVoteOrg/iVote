import React from "react";
import "./styles/team.css";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";

export default class Team extends React.Component{
    render(){
        return(
          <div id="teams">
            <div className="center">
              <Navbar/>
              <Card.Title className="big">Team</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </div>
        )
    }
};