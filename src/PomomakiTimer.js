import React, { Component } from 'react';
import './PomomakiTimer.css'
import WorkingTimer from './WorkingTimer'

class PomomakiTimer extends Component {

    render() {
        return (
            <div className="PomomakiTimer"> 
               <WorkingTimer/> 
            </div>
        );
    };
};

export default PomomakiTimer;
