import React, { Component } from 'react';
import './PomomakiTimer.css'
import CountdownTimer from './CountdownTimer'
import Settings from './Settings'
import {Icon, Button, Layout} from 'element-react';
import './button.css'

class PomomakiTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: "0",
            seconds: "25", 
            timerType: "Working",
            dialogVisible: false
        };
        this.handleTimerSwitch = this.handleTimerSwitch.bind(this);

        this.workingPomoCount = 0;
    }

    // timerType is the type of the completed timer
    handleTimerSwitch(timerType) {
       
        if (timerType == "Working") {
            this.workingPomoCount++;
            
            // if 3 pomo's have been completed trigger long break
            if (this.workingPomoCount == 3) {
                // Reset Pomo count
                this.workingPomoCount = 0;
                this.setState({
                    minutes: "0",
                    seconds: "15",
                    timerType: "Break"
                });
            } else {
                // switch to basic break timer 
                this.setState({
                    minutes: "0",
                    seconds: "5",
                    timerType: "Break"
                });
            }
        } 
       
        if (timerType == "Break") {
            // switch to working timer
            this.setState({
                minutes: "0",
                seconds: "25",
                timerType: "Working"
            });
        }
    }

    render() {
        return (
            <div className="PomomakiTimer"> 
                <Settings/>
                {this.state.timerType} Timer! ({this.workingPomoCount} Pomo's Completed)
               <CountdownTimer 
                min = {this.state.minutes}
                sec = {this.state.seconds}
                timerType = {this.state.timerType} 
                timerSwitch = {this.handleTimerSwitch}/>
            </div>
        );
    };
};

export default PomomakiTimer;
