import React from "react";
import PartyCards from './PartyCards'
import '../styles/parties.css'
export default class About extends React.Component{
    render(){
        return(
        <div className = "parties">
            <h1 className ="h111">Present Running Elections</h1>
            <div className ="parties-container">
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                <PartyCards/>
                
            </div>
        </div>
        )
    }
};