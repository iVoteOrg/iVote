import React from "react";
import Particles from "react-particles-js"
import ParticleConfig from "./config/particle-config_con"

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    );
}

