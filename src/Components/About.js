import React from "react";
import "./styles/about.css";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
// import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap'

export default class About extends React.Component{
    render(){
        return(
          <div id="about">
            <div className="center">
              <Navbar/>
              <Card.Title className="big">About</Card.Title>
              <Card.Text>
                
              <Container>
  <Row className="justify-content-md-start">
    <Col xs lg="12">
      <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin condimentum ligula vel pretium. Praesent nec feugiat erat. Nunc consectetur, leo sed ullamcorper eleifend, tortor mauris mattis velit, in efficitur mauris erat a massa. Donec sollicitudin ante id blandit volutpat. Quisque lacinia semper lacus vitae imperdiet. Donec malesuada, nulla quis congue malesuada, nisi augue imperdiet sapien, et blandit ante nibh a orci. Donec at lacinia justo. Etiam dignissim vitae eros ac ultrices. Nullam eget laoreet eros, vel pulvinar dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sit amet dignissim magna, quis ultricies mauris.
    </p>
          <p>
    Aenean auctor nibh non bibendum tristique. Sed eu tincidunt nisl. Phasellus bibendum risus eget magna pharetra commodo. Vestibulum leo ex, tincidunt vitae lacus id, scelerisque lacinia metus. Donec dignissim id augue at suscipit. Nullam feugiat turpis eu ipsum gravida, quis tristique enim dignissim. Integer aliquet blandit tortor, nec imperdiet nisl vestibulum et. Etiam iaculis eros nisi, in tincidunt leo faucibus nec. Etiam id facilisis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eget elit a velit rhoncus malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut porttitor ipsum lectus, id tincidunt magna auctor eget. Fusce semper velit enim, ut lobortis turpis viverra non. Quisque cursus cursus risus sit amet hendrerit.
    </p>
    </Col>

    
  </Row>
</Container>
              </Card.Text>
              
            </div>
            {/* <Footer /> */}
          </div>
        )
    }
};