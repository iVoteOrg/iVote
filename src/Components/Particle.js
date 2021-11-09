import React from "react";
import "./particle/ParticleScreen.css";
import ParticleBackground from "./particle/ParticleBackground";
import Signinscroll from "./Signscroll";
import Signin from "./Signin";
import Typical from 'react-typical'
const steps = [
  'Hello👋',1000,
  'Welcome to iVote',1000,
  'We Concern Your Privacy 👌',1000,
  "So that's why we build this platform ",1000,
  "It's a 3 Factor Authentication System",1000,
  "Each Vote Matters ♥",1000,
  
];
export default class Particle extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div className = "Particle_screen" id = "particle">
                        <ParticleBackground />
                        <div id="text_div center_all">
                            <div className="center_all">
                                <h1 className="sasdasdasd">
                                <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Signinscroll/>
                
                <Signin/>
            </div>
        );
    };
};
