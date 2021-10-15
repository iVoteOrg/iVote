import React, { Component } from 'react';

import Particle from "./Components/Particle"
import Signin from "./Components/Signin";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Header from "./Components/Header"

import "./app.css"

class App extends Component {
  render() {
  return (
      <>
        <Header/>
        <Particle/>
        <Signin/> 
        <About/>
        <Team/>
        <Contact/>
      </>
        
  );
}
}

export default App;
