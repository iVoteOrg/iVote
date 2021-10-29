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
            <Navbar />
            <div className="section">
              <Container className="container">
                <Row className="pt-5">
                  <Col>
                    <Card style={{ width: '18rem' }} className="card">
                      <div className="content">
                        <Card.Img className="imgBx" variant="top" src="https://images.unsplash.com/photo-1635424240719-f62cec4775cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                        <Card.Body className="contentBx">
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>

                  <Col>
                    <Card style={{ width: '18rem' }}>
                    <div className="content">
                        <Card.Img className="imgBx" variant="top" src="https://images.unsplash.com/photo-1635424240719-f62cec4775cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                        <Card.Body className="contentBx">
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>

                  <Col>
                    <Card style={{ width: '18rem' }}>
                    <div className="content">
                        <Card.Img className="imgBx" variant="top" src="https://images.unsplash.com/photo-1635424240719-f62cec4775cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                        <Card.Body className="contentBx">
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )
    }
};