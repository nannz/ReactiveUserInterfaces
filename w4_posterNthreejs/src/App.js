
// import ReactTHREE from 'react-three';
// import THREE from 'three';

import React, {Component} from 'react';
import './App.css';
import Input from './Input'
import Poster from './Poster'
import Selector from './Selector'

class App extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.changeShape = this.changeShape.bind(this);

        this.state = {
            eventName: "Give me the event name",
            eventLocation: "Where is it?",
            eventTime:"Wheeeeen?",
            shape:""
        }
    }

    changeName(eventName) {
        this.setState({
            eventName: eventName
        })
    }
    changeLocation(location){
        this.setState({
            eventLocation: location
        })
    }
    changeTime(time){
        this.setState({
            eventTime: time
        })
    }
    changeShape(shape){
        this.setState({
            shape: shape
        })
    }

    render() {

        return (
            <div className="App">
                <div className="form">
                    <Input label="Event Name" onChange={this.changeName} placeholder={this.state.eventName}/>
                    <Input label="Location" onChange={this.changeLocation} placeholder={this.state.eventLocation}/>
                    <Input label="Time" onChange={this.changeTime} placeholder={this.state.eventTime}/>
                    <Selector label = "Shape" onChange = {this.changeShape}/>
                </div>
                <Poster eventName={this.state.eventName} location = {this.state.eventLocation} time = {this.state.eventTime} shape = {this.state.shape}/>
            </div>
        );
    }
}

export default App;
