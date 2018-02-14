import React, {Component} from 'react';
import './App.css';
import Input from './Input'
import Poster from './Poster'

class App extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.state = {
            eventName: "Give me the event name",
            eventLocation: "Where is it?",
            eventTime:"Wheeeeen?"
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

    render() {

        return (
            <div className="App">
                <div className="form">
                    <Input label="Event Name" onChange={this.changeName}/>
                    <Input label="Location" onChange={this.changeLocation}/>
                    <Input label="Time" onChange={this.changeTime}/>
                </div>
                <Poster eventName={this.state.eventName} location = {this.state.eventLocation} time = {this.state.eventTime}/>
            </div>
        );
    }
}

export default App;
