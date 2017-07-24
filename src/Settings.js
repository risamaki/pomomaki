import React, { Component } from 'react';
import './Settings.css'
import {Icon, Button} from 'element-react';

class Settings extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "Settings">
                <Button type="primary">Settings</Button>
            </div>
        );
    };
};

export default Settings;
