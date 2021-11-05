import React from "react";
import './styles/previous.css'
import './styles/cardss.css'

export default class About extends React.Component{
    render(){
        return(
        <div className = "previous">
            <div className = "inn">
                <h1>
                    Previous Election Winners
                </h1>
                <div className ="container-box">
                    <div className ="card_last_1">
                        <div className = "year_box">
                            2018
                        </div>
                        
                        <div className ="image_box">
                            
                        </div>
                        <div className="details_box">
                            Congress
                            <br/>
                            Rahul Gandhi
                        </div>
                    </div>
                    <div className ="card_last_2">
                        <div className = "year_box">
                            2019
                        </div>
                        
                        <div className ="image_box">
                            
                        </div>
                        <div className="details_box">
                            Aam Admi Party
                            <br/>
                            Arvind Kejriwal
                        </div>
                    </div>
                    <div className ="card_last_3">
                        <div className = "year_box">
                            2020
                        </div>
                        
                        <div className ="image_box">
                            
                        </div>
                        <div className="details_box">
                            BJP
                            <br/>
                            Narendra Modi
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        )
    }
};