import React from "react";

import Navi from './parts/Navi';
import Procedure from './parts/Procedure';
import Previous from './parts/Previous';
import Parties from './parts/Parties';

import './styles/user.css'

const User=()=>{
    // render(){
        return(
        <div className="whole_page_container">
            <Navi/>
            <Procedure/>
            <Previous/>
            <Parties/>
        </div>
        )
    // }
};
export default User;