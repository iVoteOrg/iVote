import React from "react";
import "./styles/about.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "./particle/Particle_Contact";

// const HemantCard = () =>

// export default class About extends React.Component{
const About = () => {
  // render(){
  return (
    <div id="about" className="about_1233">
      <Navbar />
      <ParticleBackground />
      <div className="section23">
        <Container>
          <h1>About</h1>
          <Row>
            <Col>
              <p className="pt-1">
                Electoral Systems in most of the countries have been carried out
                in exactly the same traditional manner for many years. People
                standing up for the elections have evolved their way of working
                and laying down the democratic rules, their promises have
                evolved along with the growing requirements and advancements
                demanded by the public, still the process of electing the most
                reliable body for themselves is being laid down on the terms of
                100 years old technique of electoral polling. In this section,
                we will look at the function of this outdated mechanism being
                adopted for conducting elections. For all the democratic units
                functioning with the principle of distributed power among its
                people, a yet centralized system had been set up. Voting
                mechanisms carried out in most of the countries and states are
                based on physical electoral polling with voting 4 booths set up
                in various places inside the region. The main drawback for this
                system can be clearly seen in the media which posts about the
                various unethical practises involved with this mechanism.
                Political parties indulge in unfair means of collecting votes.
                They either threaten people to cast their vote for them, or
                bluff with the counting of votes. A lot of cases have been
                reported regarding the corruption that prevails at the time of
                elections. The essence of the principle “RIght To Vote” gets
                hindered by such activities and therefore imposes insecurity
                among the people, keeping them wondering if they really own this
                right to choose their leader. It is not very wise to continue
                with this traditional and outdated mechanism for conducting
                elections. To counter this, during the global pandemic, people
                came up with online solutions for carrying out this process in
                an efficient manner and retaining the cruciality of the voting
                principles. But none of them proved to be the next method to be
                adopted.
              </p>

              <p className="pt-1">
                Considering the above scenario, after a lot of surveying and
                analysis, iVote comes up with an innovative, impactful and
                futuristic solution to this problem. With the most trending
                technologies such as Blockchain and Machine learning, this
                platform aims to provide an online, decentralised,
                3-Factor-Authentication system for conducting elections all
                around the world. It's a global web based application that
                allows people to anonymously vote for their trusted parties and
                preserve their Right To Vote in a reliable, transparent, secure
                and trustless manner. Below is a brief explanation of the
                concept that the iVote team proposes against all other
                possibilities and alternatives. The very first approach this
                solution progresses with is the idea of decentralising this
                process to make the public realise the potential of their
                distributed power for real. 5 This progression is accomplished
                with the help of fast growing and leading technology Blockchain.
                Blockchain is a decentralised, trustless and secure ledger that
                stores any data in blocks that are linked together and protected
                with one way hashing algorithms. iVote uses this aspect of
                Blockchain to eliminate the centralised electoral booth policy
                and bring trust to the public by making them own their Right To
                Vote and cast their opinion in a fair manner. Unlike the
                questionable nature of other online platforms in terms of
                authority and security, iVote provides 3-factor-authentication
                for its users to watch upon any unethical or unauthorised entity
                entering the system. To build trust of people, a strong,
                efficient and hackerproof system has to be built with the surety
                of preserving people’s data and respecting their rights. Coming
                to the functioning of iVote, with an already setup database for
                people’s identity who have the rightful authority to vote, the
                platform allows users to cast their vote by going through the
                process of 3-factor-authentication powered by machine learning.
                Counting of votes is done automatically with the help of logic
                implemented in the smart contract, and ensures elimination of
                any third party interference. After the election time window has
                been closed the results are generated and declared automatically
                on the website. With the vision of having least interference of
                any non concerned body in between the electoral process, iVote
                raises an exception among all the solutions having such an
                innovative and futuristic approach towards likewise important
                events.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  // }
};
export default About;
