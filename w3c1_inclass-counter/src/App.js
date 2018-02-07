import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'

class App extends Component {
    render() {
        return (
            <div className="App">

                <Clock clockName="fast" timeStep={1000} increment={1}/>
                <Clock clockName="slow" timeStep={5000} increment={5}/>
            </div>
        );
    }
}

export default App;
