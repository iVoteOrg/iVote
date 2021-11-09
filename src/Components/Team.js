import React from "react";
import "./styles/team.css";
// import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import { Card } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from './Footer';
// import GlassCard from './glassCard';

import GarvitCard from './GarvitCard';
import ShrutiCard from './ShrutiCard';
import SahilCard from './SahilCard';
import ShrishtiCard from './ShrishtiCard';
import HemantCard from './HemantCard';

export default class Team extends React.Component{
    render(){
        return(
          <div id="teams">
            <Navbar />
            <div className="sectionasd">
              <Container>
                  <Col>
                      <GarvitCard />
                  </Col>

                  <Col>
                      <ShrutiCard />
                  </Col>

                  <Col>
                      <SahilCard />
                  </Col>
                
                  <Col>
                      <ShrishtiCard />
                  </Col>

                  <Col>
                      <HemantCard />
                  </Col>
               
              </Container>

            </div>
            {/* <Footer/> */}
          </div>
        )
    }
};