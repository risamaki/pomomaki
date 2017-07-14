import React, { Component } from 'react';
import './WorkingTimer.css'

// PROPS are properties inside of a React component that are passed in from somewhere (generally the parent)
// components use these to talk to each other

// STATE used to help the component react to data that doesn't come from a parent componenet (user input for ex)
// componenet's state can be passed down to it's own children as a prop

class WorkingTimer extends Component {

    // to set up an initial internal state 
    constructor(props) {
        super(props); // calls out to parent constructor 
        this.state = { time: {}, seconds: 59};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    };

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };

        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({time: timeLeftVar});
    }

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so re-render happens
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds:seconds,
        });

        // Check if we're at zero 
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="WorkingTimer"> 
                m: {this.state.time.m} s:{this.state.time.s} 
                <br/>
                <button onClick={this.startTimer}>Start</button>
            </div>
        );
    };
};

export default WorkingTimer;
