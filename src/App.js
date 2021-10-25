import React, { Component } from 'react';

import Particle from "./Components/Particle"
import Signin from "./Components/Signin";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import "./app.css"

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return (
      <>
          <Router>
            <Navbar/>
            <Switch>
              <Route path='/' exact component = {Particle}/>
              <Route path='/SignIn' exact component = {Signin}/>
              <Route path='/about' exact component = {About}/>
              <Route path='/contact' exact component = {Contact}/>
              <Route path='/team' exact component = {Team}/>
            </Switch>
          </Router>
            
      </>
        
  );
}

export default App;
