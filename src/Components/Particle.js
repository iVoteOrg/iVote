import React from "react";
import "./particle/ParticleScreen.css";
import ParticleBackground from "./particle/ParticleBackground";
import Signinscroll from "./Signscroll";
import Signin from "./Signin";
export default class Particle extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div className = "Particle_screen" id = "particle">
                        <ParticleBackground />
                        <div id="text_div center_all">
                            <div className="center_all">
                                <h1 className="sasdasdasd">Welcome to i-Vote</h1>
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
