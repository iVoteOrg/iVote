import React from 'react'
import './styles/ThreeFA.css'
import ParticleBackground from "./particle/Particle_Contact";
const ThreeFA=()=>{
        return(
          <div className = "contact_pageeee">
            <div id="contact" className="center">
              <div className = "Particle_screen_1" id = "particle">
                  <ParticleBackground />
                  <div id="text_div center_all">
                      <div className="center_all">
                          <div>
                          <h1>
                            Facial Recognition Model
                          </h1>
                        </div>
                        <div>
                            <input type="button" className="web-cam btn" value="Click Here to Scan Your Face "/>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        )
};
export default ThreeFA;
