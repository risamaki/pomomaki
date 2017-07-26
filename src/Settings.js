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
            }
        }
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
                        <Form model={this.state.form}>
                            <Form.Item label="Working Time" labelWidth="120">
                                <Input value={this.state.form.workingTime}></Input>
                            </Form.Item>
                            <Form.Item label="Break Time" labelWidth="120">
                                <Input value={this.state.form.shortBreakTime}></Input>
                            </Form.Item>
                            <Form.Item label="Long Break Time" labelWidth="120">
                                <Input value={this.state.form.longBreakTime}></Input>
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
