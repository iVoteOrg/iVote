import React from "react";
import '../styles/user.css'
import Video from './video';
import {Button} from 'react-bootstrap'


export default class About extends React.Component{
    render(){
        return(
            
        <div className = "procedure">
            <div className = "inner">
                <h1>
                    Procedure Of Voting
                </h1>
                <Video className ="videoo" videoId = 'YVgfHZMFFFQ'/>
                <div className ="container-grid">
                    Create Metamask Account
                    <Button href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" className="buttone">
                        Create 
                    </Button>
                </div>
            </div>
        </div>
        )
    }
};