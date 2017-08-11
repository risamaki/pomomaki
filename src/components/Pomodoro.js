import React, { Component } from 'react';
import Timer from '../../src/components/Timer'

import {} from 'element-react';

import '../../src/styles/Pomodoro.css'
import '../../src/styles/theme/row.css'

class Pomodoro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: props.workingMin,
            seconds: props.seconds,
            timerType: "Working",
        };
        this.handleTimerSwitch = this.handleTimerSwitch.bind(this);

        this.workingPomoCount = 0;
    }

     componentWillReceiveProps(props) {
        this.setState({
            minutes: props.workingMin, 
            seconds: props.seconds,
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
                    seconds: this.props.seconds,
                    timerType: "Break"
                });
            } else {
                // switch to basic break timer 
                this.setState({
                    minutes: this.props.shortBreakMin,
                    seconds: this.props.seconds,
                    timerType: "Break"
                });
            }
        } 
       // eslint-disable-next-line
        if (timerType == "Break") {
            // switch to working timer
            this.setState({
                minutes: this.props.workingMin,
                seconds: this.props.seconds,
                timerType: "Working"
            });
        }
    }

    render() {
        return (
            <div className="Pomodoro">
                    {this.state.timerType} Timer! 
                    <bk/>
                    ({this.workingPomoCount} Pomo's Completed)
                    <Timer 
                        min = {this.state.minutes}
                        sec = {this.state.seconds}
                        timerType = {this.state.timerType} 
                        timerSwitch = {this.handleTimerSwitch}/>
            </div>
       
        );
    };
};

export default Pomodoro;
