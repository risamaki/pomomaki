import React, { Component } from 'react';
import './PomomakiTimer.css'
import CountdownTimer from './CountdownTimer'

class PomomakiTimer extends Component {
    render() {
        return (
            <div className="PomomakiTimer"> 
                {/* Working Timer*/}
               <CountdownTimer min="26" sec="0"/>
                {/* Break Timer*/}
               {/*<CountdownTimer minutes="10" seconds="0"/>  */}
            </div>
        );
    };
};

export default PomomakiTimer;
