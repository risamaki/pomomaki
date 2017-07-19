import React, { Component } from 'react';
import './CountdownTimer.css'
import Button from 'antd/lib/button';

class CountdownTimer extends Component {

    // to set up an initial internal state, gets called only once 
    constructor(props) {
        super(props); // calls out to parent constructor 
        this.state = {
            minutes: props.min, 
            seconds: props.sec, 
            timerType: props.timerType
        }
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    };

    componentWillReceiveProps(props) {
        console.log(props)
        this.setState({
            minutes: props.min, 
            seconds: props.sec,
            timerType: props.timerType
        });
    }

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

        if (seconds == 0) {
            // Timer is complete
            // switch to other timer and reset state
            if (minutes == 0) {
                clearInterval(this.timer);
                this.timer = 0;
                this.props.timerSwitch(this.props.timerType)
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
                <Button type="primary" onClick={this.startTimer}>Start</Button>
            </div>
        );
    };
};

export default CountdownTimer;
