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
            // default values already in there -- this way they can be passed down
            form: {
                workingMin: '25',
                workingSec: '00',
                shortBreakMin: '5',
                shortBreakSec:'00',
                longBreakMin: '15',
                longBreakSec: '00'
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
                                callback(new Error('Please input a valid time'))
                            }
                            else {
                                callback();
                            }
                        }, 1000);  
                    }, trigger :'change'}
                ],
                workingSec: [
                    { required: true, message: "Please input a valid time", trigger:'blur' },
                    { validator: (rule, value, callback) => {
                        var number = parseInt(value, 10);
                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input valid digits'));
                            }
                            if (number < 0 || number > 60) {
                                callback(new Error('Please input a valid time'))
                            }
                            // eslint-disable-next-line
                            if (!(value.toString().length == 2)) {
                                callback(new Error('Please use 2 digits'))
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
                            else {
                                callback();
                            }
                        }, 1000);
                    }, trigger :'change'}  
                ],
                shortBreakSec: [
                    { required: true, message: "Please input a valid time", trigger:'blur' },
                    { validator: (rule, value, callback) => {
                        var number = parseInt(value, 10);
                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input valid digits'));
                            } 
                            if (number < 0 || number > 60) {
                                callback(new Error('Please input a valid time'))
                            }
                            // eslint-disable-next-line
                            if (!(value.toString().length == 2)) {
                                callback(new Error('Please use 2 digits'))
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
                            else {
                                callback();
                            }
                        }, 1000);
                    }, trigger :'change'}
                ],
                longBreakSec: [
                    { required: true, message: "Please input a valid time", trigger:'blur' },
                    { validator: (rule, value, callback) => {
                        var number = parseInt(value, 10);
                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input valid digits'));
                            } 
                            if (number < 0 || number > 60) {
                                    callback(new Error('Please input a valid time'))
                            }
                            // eslint-disable-next-line   
                            if (!(value.toString().length == 2)) {
                                callback(new Error('Please use 2 digits'))
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
                    visible={ this.state.dialogVisible }
                    onCancel={ () => this.setState({ dialogVisible: false }) }>
                    <Dialog.Body>
                        <Form ref="form" model={this.state.form} rules={this.state.rules}>
                            <Layout.Row>
                                <Layout.Col span="12">
                                    <Form.Item label="Working Minutes" prop="workingMin" labelWidth="100">
                                        <Input value={this.state.form.workingMin} onChange={this.onChange.bind(this, 'workingMin')}></Input>
                                    </Form.Item>
                                </Layout.Col>
                                <Layout.Col span="12">
                                    <Form.Item label="Seconds" prop="workingSec" labelWidth="100">
                                        <Input value={this.state.form.workingSec} onChange={this.onChange.bind(this, 'workingSec')}></Input>
                                    </Form.Item> 
                                </Layout.Col>
                            </Layout.Row>
                            <Layout.Row>
                                <Layout.Col span="12">
                                    <Form.Item label="Short Break Minutes" prop="shortBreakMin" labelWidth="100">
                                        <Input value={this.state.form.shortBreakMin} onChange={this.onChange.bind(this, 'shortBreakMin')}></Input>
                                    </Form.Item>
                                </Layout.Col>
                                <Layout.Col span="12">
                                    <Form.Item label="Seconds" prop="shortBreakSec" labelWidth="100">
                                        <Input value={this.state.form.shortBreakSec} onChange={this.onChange.bind(this, 'shortBreakSec')}></Input>
                                    </Form.Item>
                                </Layout.Col>
                            </Layout.Row>
                            <Layout.Row>
                                <Layout.Col span="12"> 
                                    <Form.Item label="Long Break Minutes" prop="longBreakMin" labelWidth="100">
                                        <Input value={this.state.form.longBreakMin} onChange={this.onChange.bind(this, 'longBreakMin')}></Input>
                                    </Form.Item>
                                </Layout.Col>
                                <Layout.Col span="12">
                                    <Form.Item label="Seconds" prop="longBreakSec" labelWidth="100">
                                        <Input value={this.state.form.longBreakSec} onChange={this.onChange.bind(this, 'longBreakSec')}></Input>
                                    </Form.Item>
                                </Layout.Col>  
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
                                workingSec = {this.state.form.workingSec}
                                shortBreakMin = {this.state.form.shortBreakMin}
                                shortBreakSec = {this.state.form.shortBreakSec}
                                longBreakMin = {this.state.form.longBreakMin}
                                longBreakSec = {this.state.form.longBreakSec}
                            />
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </div>
        );
    };
};

export default Settings;
