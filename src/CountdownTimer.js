import React, { Component } from 'react';
import './CountdownTimer.css'
import { Message, MessageBox, Button} from 'element-react';
import './button.css'

class CountdownTimer extends Component {
    

    // to set up an initial internal state, gets called only once 
    constructor(props) {
        super(props); // calls out to parent constructor 
        this.state = {
            minutes: props.min, 
            seconds: props.sec, 
            timerType: props.timerType,
            startButton: true
        }
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        
    };


    componentWillReceiveProps(props) {
        this.setState({
            minutes: props.min, 
            seconds: props.sec,
            timerType: props.timerType
        });
    }

    startTimer() {
         this.setState({
            startButton: false
        });
        console.log(this.state.startButton)
        // if timer isn't start it yet, set the Interval
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
        
    }

    stopTimer() {
        MessageBox.confirm('Would you like to stop the timer?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type:'warning'
        }).then( () => {
            clearInterval(this.timer); // this isnt working
            this.timer = 0;
           
           // reset to intial state
            this.setState({
                minutes: this.props.min, 
                seconds: this.props.sec,
                timerType: this.props.timerType,
                startButton: true
            });
            Message ({
                message: 'Timer was stopped'
            })
        }).catch( () => {
            Message ({
                message: 'Timer will continue'
            })
        })
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
                MessageBox.msgbox({
                    title: this.props.timerType + ' timer is complete!',
                    confirmButtonText: 'OK',
                }).then (action => {
                   console.log(action)
                })

                this.setState({
                    startButton: true
                });

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
        if (this.state.startButton == true) {
            return (
                <div className="CountdownTimer"> 
                    {this.state.minutes} min {this.state.seconds} sec
                    <br/>
                    <Button id="startTimer" type="primary" onClick={this.startTimer}>Start Timer</Button>
                </div>
            );
        } else {
             return (
                <div className="CountdownTimer"> 
                    {this.state.minutes} min {this.state.seconds} sec
                    <br/>
                    <Button id="startTimer" type="primary" onClick={this.stopTimer}>Stop Timer</Button>
                </div>
            );
        }
        
       
    };
};

export default CountdownTimer;
