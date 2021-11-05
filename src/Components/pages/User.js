import React from "react";
import Navi from './Navi';
import './styles/user.css'
export default class About extends React.Component{
    render(){
        return(
        <div>
            <Navi/>
            <div className = "procedure">
                <div className = "inner">
                    <h1>
                        Procedure of Voting
                    </h1>
                    
                </div>
            </div>
            <div className = "previous">
                <div className = "inner">
                    <h1>
                        Previous Winners
                    </h1>
                </div>
            </div>
        </div>
        )
    }
};