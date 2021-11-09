import React from "react";
import "./styles/team.css";
// import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import { Card } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from './Footer';
import GarvitCard from './GarvitCard';
import ShrutiCard from './ShrutiCard';
import SahilCard from './SahilCard';
import ShrishtiCard from './ShrishtiCard';
import HemantCard from './HemantCard';


import ParticleBackground from "./particle/Particle_Contact";


export default class Team extends React.Component{
    render(){
        return(
          <div id="teams">
            <Navbar />
            <ParticleBackground />

            <div className="section">
              <Container>
                <Row className="pt-5">
                  <Col>
                    <Card>
                      <GarvitCard />
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <ShrutiCard />
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <HemantCard />
                    </Card>
                  </Col>
                </Row>

                <Row className="pt-5 row2">
                  <Col>
                    <Card>
                      <SahilCard />
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <ShrishtiCard />
                    </Card>
                  </Col>
                </Row>

              </Container>
            </div>
            {/* <Footer/> */}
          </div>
        )
    }
};