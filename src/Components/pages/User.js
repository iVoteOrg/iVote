import React from "react";
import Navi from './Navi';
import './styles/user.css'
import Procedure from './Procedure'
export default class About extends React.Component{
    render(){
        return(
        <div>
            <Navi/>
            <Procedure/>
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