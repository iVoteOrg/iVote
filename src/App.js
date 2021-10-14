import React from "react";

import Particle from "./Components/particle/Particle"
import Signin from "./Components/signin/Signin";
import About from "./Components/About/About";
import Team from "./Components/teamMember/Team";
import Contact from "./Components/contact/Contact";
import Navbar from "./Components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
        <Particle/>
        <Signin/> 
        <About/>
        <Team/>
        <Contact/>
        <Navbar/>
    </div>
  );
}

export default App;
