import React, { Component } from 'react';

import Particle from "./Components/Particle"
import Signin from "./Components/Signin";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import "./app.css"

class App extends Component {
  render() {
  return (
      <>
        <Particle/>
        <div>
            <Navbar/>
            <Signin/> 
            <About/>
            <Team/>
            <Contact/>
        </div>
      </>
        
  );
}
}

export default App;
