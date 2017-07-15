import React, { Component } from 'react';
import './TimerWrapper.css'
import CountdownTimer from './CountdownTimer'

class TimerWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: "0",
            seconds: "5", 
            timerType: "working"
        };
        this.handleTimerSwitch = this.handleTimerSwitch.bind(this);
    }

    // timerType is the type of the completed timer
    handleTimerSwitch(timerType) {
       
        if (timerType == "working") {
            // switch to break timer 
            this.setState({
                minutes: "0",
                seconds: "10",
                timerType: "break"
            });
        } 
       
        if (timerType == "break") {
            // switch to working timer
            this.setState({
                minutes: "0",
                seconds: "15",
                timerType: "working"
            });
        }
    }

    render() {
        return (
            <div className="TimeWrapper"> 
                min = {this.state.minutes}
                <br/>
                sec = {this.state.seconds}
                <br/>
                timerType = {this.state.timerType}
                <br/>
               <CountdownTimer 
                min = {this.state.minutes}
                sec = {this.state.seconds}
                timerType = {this.state.timerType} 
                timerSwitch = {this.handleTimerSwitch}/>
            </div>
        );
    };
};

export default TimerWrapper;
