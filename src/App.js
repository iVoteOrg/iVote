import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Particle from "./Components/Particle"
import Signin from "./Components/Signin";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import User from "./Components/pages/User";

import "./app.css"

class App extends Component {
  render() {
    return (
      <>
      <Router>
          <div>
              < Route exact path='/' component = {Particle}/>
              <Route exact path='/SignIn' component = {Signin}/>
              <Route exact path='/about' component = {About}/>
              <Route exact path='/contact' component = {Contact}/>
              <Route exact path='/team' component = {Team}/>
              <Route exact path='/user' component = {User}/>
            </div>
          </Router>
      </>
    );
  };
};

export default App;