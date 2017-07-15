import React, { Component } from 'react';
import './CountdownTimer.css'

class CountdownTimer extends Component {

    // to set up an initial internal state 
    constructor(props) {
        super(props); // calls out to parent constructor 
        this.state = {minutes: this.props.min, seconds:this.props.sec}
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    };

    startTimer() {
        // if timer isn't start it yet, set the Interval
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so re-render happens
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        
        if (seconds > 0) {
            let seconds = this.state.seconds - 1
            let minutes = this.state.minutes
            this.setState({
                minutes:minutes,
                seconds:seconds,
            });
        }
       
        // Check if we're at zero 
        if (seconds == 0) {
            if (minutes == 0) {
                clearInterval(this.timer);
            
        } else {
                let minutes = this.state.minutes - 1;
                let seconds = 59
                this.setState({
                    minutes:minutes,
                    seconds:seconds,
                })
            }
            
        }
    }

    render() {
        return (
            <div className="CountdownTimer"> 
                {this.state.minutes} min {this.state.seconds} sec
                <br/>
                <button onClick={this.startTimer}>Start</button>
            </div>
        );
    };
};

export default CountdownTimer;
