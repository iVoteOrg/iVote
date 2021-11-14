import React from "react";
import "./styles/about.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap'
import ParticleBackground from "./particle/Particle_Contact";
             
// const HemantCard = () => 

// export default class About extends React.Component{
const About=()=>{
// render(){
        return(
          <div id="about" className ="about_1233">
            <Navbar/>
            <ParticleBackground />
            <div className="section23">
              <Container>
                <h1>About</h1>
                <Row>
                  <Col>
                    <p className="pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae molestie turpis. Praesent non ipsum id risus rhoncus semper at ac justo. In hac habitasse platea dictumst. Quisque dapibus porta feugiat. Vivamus vitae faucibus odio. Donec bibendum vestibulum neque ac ultricies. Mauris id sapien id enim luctus placerat ut in felis. Morbi vel mattis est, non varius eros. Morbi sodales, nulla et consequat porttitor, nisi urna vulputate eros, consectetur placerat ipsum ante a enim. Vestibulum lorem nunc, placerat accumsan luctus non, volutpat quis purus. Donec commodo maximus turpis eu posuere. Maecenas at lectus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed cursus consequat mauris.
                    </p>

                    <p className="pt-2">
                    Donec id ex nunc. Sed accumsan facilisis nisi. Aenean gravida, leo vitae vehicula sagittis, justo quam elementum magna, gravida elementum augue risus nec nibh. In maximus, eros eu ornare mattis, orci ligula tempus ligula, quis posuere est risus at dolor. Nunc a orci et enim efficitur tincidunt. Duis iaculis sapien laoreet ante sodales efficitur. Ut eget interdum massa, ac semper sem. Donec vulputate, mauris non condimentum blandit, libero ante tristique ante, sed vulputate nisi justo eget massa. Duis metus libero, malesuada quis maximus eu, mollis at ipsum. Ut eu fringilla diam. Nullam id pharetra turpis, ac mattis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis fringilla commodo velit, nec vestibulum massa dignissim mattis. Nulla maximus finibus ex. Phasellus posuere quam sed ante vestibulum commodo. Aenean sit amet nisi a mi rhoncus porta.

                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <Footer/>
            </div>
          </div>
        )
    // }
};
export default About;