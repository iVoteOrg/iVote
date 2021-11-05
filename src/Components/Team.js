import React from "react";
import "./styles/team.css";
// import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import { Card } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from './Footer';
import GlassCard from './glassCard';


export default class Team extends React.Component{
    render(){
        return(
          <div id="teams">
            <Navbar />
            <div className="section">
              <Container>
                <Row className="pt-5">
                  <Col>
                    <Card>
                      <GlassCard />
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <GlassCard />
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <GlassCard />
                    </Card>
                  </Col>
                </Row>

                <Row className="pt-5">
                  <Col>
                    <Card>
                      <GlassCard />
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <GlassCard />
                    </Card>
                  </Col>
                </Row>

              </Container>
            </div>
            <Footer/>
          </div>
        )
    }
};