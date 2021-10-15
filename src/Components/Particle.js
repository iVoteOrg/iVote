import React from "react";

import "./particle/ParticleScreen.css";

import ParticleBackground from "./particle/ParticleBackground";

export default class Particle extends React.Component{
    render(){
        return(
            <div className = "Particle_screen" id = "particle">
                <ParticleBackground />
                <div id="text_div center_all">
                    <div className="center_all">
                        <h1 className="custom-subTitle">Welcome to I-Vote</h1>
                    </div>
                </div>
            </div>
        )
    }
};
