import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Card, Button } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import "./styles/team.css";

const Container = styled(animated.div)`
cursor: pointer;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ShrishtiCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <Card >
                    <div className="content">
                        <Card.Img className="imgBx" variant="top" src="../images/Shrishti.jpg" />
                        <Card.Body className="contentBx">
                          <Card.Title>Shrishti Singh (19CBS1049)</Card.Title>
                          <Card.Text>
                            Machine Learning
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                          <div className="d-flex  justify-content-center">
                            <div className="p-4">
                              <a href="http://facebook.com">
                                <BsFacebook />
                              </a>
                            </div>
                            <div className="p-4">
                              <a href="http://twittwe.com">
                              <BsFacebook />
                              </a>
                            </div>
                            <div className="p-4">
                              <a href="http://facebook.com">
                              <BsFacebook />
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </div>
                    </Card>
        </Container>
    );
}

export default ShrishtiCard;