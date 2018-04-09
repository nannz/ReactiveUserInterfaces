import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './HomePage'
import PersonDetail from './PersonDetail'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path='/' component = {HomePage}/>
                        <Route path = '/people/:id' component = {PersonDetail}/>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
