import React from "react";
import Navi from './Navi';
import './styles/user.css'
import Procedure from './Procedure';
import Previous from './Previous';

export default class About extends React.Component{
    render(){
        return(
        <div>
            <Navi/>
            <Procedure/>
            <Previous/>
        </div>
        )
    }
};