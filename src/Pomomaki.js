import React, { Component } from 'react';
import './Pomomaki.css'

class Pomomaki extends Component {

    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello'};
        // in ES2016 for classes with react Componenets:
        // any events that need to acess any internal object details needs to be
        // explicitly bound to that instance of the component
        // ie. this.frencify doesnt know what "this" refers to in this.setState
        // this line says "any time you see a reference to this inside of the 
        // frenchify function, specfically refer to ME"
        this.frenchify = this.frenchify.bind(this);
    };

    render() {
        return (
            <div className="Pomomaki"> {this.state.greeting} {this.props.name}! 
                <br/>
                <button onClick={this.frenchify}> Frenchify! </button>
            </div>
        );
    };

    frenchify() {
        // any state changes NEED to happen via the this.setState function
        // you cannot modifty the state object inside of a class directly
        this.setState({greeting : 'Bonjour'});
    }
};

export default Pomomaki;
