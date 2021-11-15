import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particle from "./Components/Particle";
import Signin from "./Components/Signin";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import User from "./Components/pages/User";
import TwoFA from "./Components/TwoFA";
import ThreeFA from "./Components/ThreeFA";
import Faucet from "./Components/pages/parts/Faucet"
import ElectionParties from './Components/pages/ElectionParties'
import "./app.css";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    return <Signin setAuthenticated={setAuthenticated} />;
  };

  const particle = () => {
    return <Particle setAuthenticated={setAuthenticated} />;
  };

  const twoFA = () => {
    return <TwoFA authenticated={authenticated} />;
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={particle} />
          <Route path="/SignIn" exact component={login} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/team" exact component={Team} />
          <Route path="/user" exact component={User} />
          <Route path="/twoFA" exact component={twoFA} />
          <Route path="/threeFA" exact component={ThreeFA} />
          <Route path="/faucet" exact component={Faucet} />
          <Route path="/ElectionParties" exact component={ElectionParties} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
