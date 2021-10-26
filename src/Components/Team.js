import React from "react";
import "./styles/team.css";
// import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import { Card, Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap'

export default class Team extends React.Component{
    render(){
        return(
          <div id="teams">
            <div className="center">
              <Navbar/>
              <Card.Title className="big">Team</Card.Title>
              <Card.Text>
              <Container>
  <Row className="justify-content-md-start pb-5">
                <Col xs lg="4">
                <Card style={{ width: '18rem' }} className="bg-dark">
                <Card.Img variant="top" src="\Components\images\sed.jpg" roundedCircle />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some Custom text one can write here
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col xs lg="4">
                <Card style={{ width: '18rem' }} className="bg-dark">
                <Card.Img variant="top" src="\Components\images\sed.jpg" roundedCircle />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some Custom text one can write here
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col xs lg="4">
                <Card style={{ width: '18rem' }} className="bg-dark">
                <Card.Img variant="top" src="\Components\images\sed.jpg" roundedCircle />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some Custom text one can write here
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                </Row>

                <Row className="justify-content-md-center">
                <Col xs lg="3">
                <Card style={{ width: '18rem' }} className="pr-5 bg-dark">
                <Card.Img variant="top" src="\Components\images\sed.jpg" roundedCircle />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some Custom text one can write here
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col xs lg="3">
                <Card style={{ width: '18rem' }} className="bg-dark">
                <Card.Img variant="top" src="\Components\images\sed.jpg" roundedCircle />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some Custom text one can write here
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                </Row>
                </Container>
              </Card.Text>
            </div>
          </div>
        )
    }
};