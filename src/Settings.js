import React, { Component } from 'react';
import './Settings.css'
import {Button, Dialog, Form, Input} from 'element-react';
import './form.css'
import './form-item.css'
import './input.css'
import './dialog.css'

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogVisible: false,
            
            form: {
                workingTime: '',
                shortBreakTime: '',
                longBreakTime: ''
            },

            rules: {
                workingTime: [
                    { required: true, message: "Please input a working Time", trigger:'blur' },
                    { validator: (rule, value, callback) => {

                        var number = parseInt(value);

                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input digits'));
                            } else {
                                callback();
                        }
                        }, 1000);
                        
                    }, trigger :'change'}
                    
                ],

                shortBreakTime: [
                    { required: true, message: "Please input a break length (short)", trigger:'blur' },
                    { validator: (rule, value, callback) => {

                        var number = parseInt(value);

                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input digits'));
                            } else {
                                callback();
                        }
                        }, 1000);
                        
                    }, trigger :'change'}
                    
                ],
                
                longBreakTime: [
                    { required: true, message: "Please input a break length (long)", trigger:'blur' },
                    { validator: (rule, value, callback) => {

                        var number = parseInt(value);

                        setTimeout( () => {
                            if (!Number.isInteger(number)) {
                                callback (new Error('Please input digits'));
                            } else {
                                callback();
                        }
                        }, 1000);
                        
                    }, trigger :'change'}
                    
                ],


            }
        }
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
                            <Form.Item label="Working Time" prop="workingTime" labelWidth="150">
                                <Input value={this.state.form.workingTime} onChange={this.onChange.bind(this, 'workingTime')}></Input>
                            </Form.Item>
                            <Form.Item label="Break Time" prop="shortBreakTime" labelWidth="150">
                                <Input value={this.state.form.shortBreakTime} onChange={this.onChange.bind(this, 'shortBreakTime')}></Input>
                            </Form.Item>
                            <Form.Item label="Long Break Time" prop="longBreakTime" labelWidth="150">
                                <Input value={this.state.form.longBreakTime} onChange={this.onChange.bind(this, 'longBreakTime')}></Input>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        {/*TODO: change to save the input values*/}
                        <Button type="primary" onClick ={() => this.setState({dialogVisible: false})}> Okay </Button>
                        <Button onClick ={() => this.setState({dialogVisible: false})}> Cancel </Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        );
    };
};

export default Settings;
