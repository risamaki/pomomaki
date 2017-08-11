import React, { Component } from 'react';
import Pomodoro from '../../src/components/Pomodoro'

import {Button, Dialog, Form, Input, Layout} from 'element-react';

import '../../src/styles/Settings.css'
import '../../src/styles/theme/form.css'
import '../../src/styles/theme/form-item.css'
import '../../src/styles/theme/input.css'
import '../../src/styles/theme/dialog.css'
import '../../src/styles/theme/row.css'

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            settingVisible: true,
            dialogVisible: false,
            seconds: '00',
            // default values already in there -- this way they can be passed down
            form: {
                workingMin: '25',
                shortBreakMin: '5',
                longBreakMin: '15',
            },
            rules: {

                // Working Time Length Rules
                workingMin: [
                    { required: true, message: "Please input a valid time", trigger:'blur' },
                    { validator: (rule, value, callback) => {
                        var number = parseInt(value, 10);
                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input valid digits'));
                            } 
                            if (number < 0) {
                                callback(new Error('Please input a valid time'));
                            }
                            if (number <= this.state.form.shortBreakMin || number <= this.state.form.longBreakMin) {
                                callback(new Error('Working Time has to be longer than Break Time'));
                            }
                            else {
                                callback();
                            }
                        }, 1000);  
                    }, trigger :'change'}
                ],
                // Short Break Length Rules
                shortBreakMin: [
                    { required: true, message: "Please input a valid time", trigger:'blur' },
                    { validator: (rule, value, callback) => {
                        var number = parseInt(value, 10);
                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input valid digits'));
                            } 
                            if (number < 0) {
                                callback(new Error('Please input a valid time'))
                            }
                            if (number >= this.state.form.workingMin) {
                                callback(new Error('Working Time has to be longer than Break Time'));
                            }
                            if (number >= this.state.form.longBreakMin) {
                                callback (new Error('Short Break Time has to be less than Long Break Time'))
                            }
                            else {
                                callback();
                            }
                        }, 1000);
                    }, trigger :'change'}  
                ],
                // Long Break Length Rules 
                longBreakMin: [
                    { required: true, message: "Please input a valid time", trigger:'blur' },
                    { validator: (rule, value, callback) => {
                        var number = parseInt(value, 10);
                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input valid digits'));
                            } 
                            if (number < 0) {
                                    callback(new Error('Please input a valid time'))
                            }
                            if (number >= this.state.form.workingMin) {
                                callback(new Error('Working Time has to be longer than Break Time'));
                            }
                            if (number <= this.state.form.shortBreakMin) {
                                callback (new Error('Short Break Time has to be less than Long Break Time'))
                            }
                            else {
                                callback();
                            }
                        }, 1000);
                    }, trigger :'change'}
                ],
            }
        }        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                console.log('submit sucessfull')
                this.setState({
                    dialogVisible: false
                })
            } else {
                console.log('error in submitting!!');
                return false;
            }
        });
    }

    handleReset(e) {
        this.setState({dialogVisible: false})
    }


    onChange(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
    }

    render() {
        return (
            <div className = "Settings">
                <Button id="settingsTitle" type="primary" onClick={ () => this.setState({dialogVisible: true}) }>Settings</Button>
                <Dialog
                    title="Set your times here!"
                    size="tiny"
                    visible={ this.state.dialogVisible }
                    onCancel={ () => this.setState({ dialogVisible: false }) }>
                    <Dialog.Body>
                        <Form ref="form" model={this.state.form} rules={this.state.rules}>
                            <Layout.Row>
                                <Form.Item label="Working Minutes" prop="workingMin">
                                    <Input value={this.state.form.workingMin} onChange={this.onChange.bind(this, 'workingMin')}></Input>
                                </Form.Item>
                            </Layout.Row>
                            <Layout.Row>
                                <Form.Item label="Short Break Minutes" prop="shortBreakMin">
                                    <Input value={this.state.form.shortBreakMin} onChange={this.onChange.bind(this, 'shortBreakMin')}></Input>
                                </Form.Item>
                            </Layout.Row>
                            <Layout.Row>
                                <Form.Item label="Long Break Minutes" prop="longBreakMin">
                                    <Input value={this.state.form.longBreakMin} onChange={this.onChange.bind(this, 'longBreakMin')}></Input>
                                </Form.Item>
                            </Layout.Row>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button type="primary" onClick ={this.handleSubmit.bind(this)}> Okay </Button>
                        <Button onClick ={this.handleReset.bind(this)}> Cancel </Button>
                    </Dialog.Footer>
                </Dialog>
                <div className = "settingsTimer">
                    <Layout.Row align="middle">
                        <Layout.Col className = "App_Timer" >
                            <Pomodoro
                                workingMin = {this.state.form.workingMin}
                                shortBreakMin = {this.state.form.shortBreakMin}
                                longBreakMin = {this.state.form.longBreakMin}
                                seconds = {this.state.seconds}
                            />
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </div>
        );
    };
};

export default Settings;
