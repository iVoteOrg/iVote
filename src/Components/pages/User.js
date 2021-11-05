import React from "react";

import Navi from './parts/Navi';
import Procedure from './parts/Procedure';
import Previous from './parts/Previous';
import Parties from './parts/Parties';

import './styles/user.css'

export default class About extends React.Component{
    render(){
        return(
        <div>
            <Navi/>
            <Procedure/>
            <Previous/>
            <Parties/>
        </div>
        )
    }
};