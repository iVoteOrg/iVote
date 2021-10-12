import React from "react";

import "./ParticleScreen.css";

import ParticleBackground from "./ParticleBackground";

export default class Particle extends React.Component{
    render(){
        return(
            <div className = "Particle_screen" >
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
