import React from "react";
import '../styles/parties.css'
export default class About extends React.Component{
    render(){
        return(
        <>
            <div className ="card_box">
                <div className ="party-logo"/>
                <div className ="party-name">
                    <button className="vote-btn">Vote Now</button>
                    <div className="threat_btn">
                        <input type="radio" value="Threat" name="threat-btn" />
                        Threat 
                    </div>
                </div>
            </div>
        </>
        )
    }
};