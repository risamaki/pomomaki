import React, { Component } from 'react';
import './PomomakiTimer.css'
import CountdownTimer from './CountdownTimer'
import {} from 'element-react';
import './row.css'

class PomomakiTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: props.workingMin,
            seconds: props.workingSec,
            timerType: "Working",
        };
        this.handleTimerSwitch = this.handleTimerSwitch.bind(this);

        this.workingPomoCount = 0;
    }

     componentWillReceiveProps(props) {
        this.setState({
            minutes: props.workingMin, 
            seconds: props.workingSec,
            timerType: "Working"
        });
    }

    // timerType is the type of the completed timer
    handleTimerSwitch(timerType) {
       // eslint-disable-next-line
        if (timerType == "Working") {
            this.workingPomoCount++;
            
            // if 3 pomo's have been completed trigger long break
            // eslint-disable-next-line
            if (this.workingPomoCount == 3) {
                // Reset Pomo count
                this.workingPomoCount = 0;
                this.setState({
                    minutes: this.props.longBreakMin,
                    seconds: this.props.longBreakSec,
                    timerType: "Break"
                });
            } else {
                // switch to basic break timer 
                this.setState({
                    minutes: this.props.shortBreakMin,
                    seconds: this.props.shortBreakSec,
                    timerType: "Break"
                });
            }
        } 
       // eslint-disable-next-line
        if (timerType == "Break") {
            // switch to working timer
            this.setState({
                minutes: this.props.workingMin,
                seconds: this.props.workingSec,
                timerType: "Working"
            });
        }
    }

    render() {
        return (
            <div className="PomomakiTimer">
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
