import React from "react";

import Particle from "./Components/particle/Particle"
import Signin from "./Components/signin/Signin";
import About from "./Components/About/About";
import Team from "./Components/teamMember/Team";
import Contact from "./Components/contact/Contact";

const App = () => {
  return (
    <div>
        <Particle/>
        <Signin/> 
        <About/>
        <Team/>
        <Contact/>
    </div>
  );
}

export default App;
