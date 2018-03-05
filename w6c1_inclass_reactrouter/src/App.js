import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import WelcomePage from './WelcomePage'
import MakingPage from './MakingPage'
import FinishPage from './FinishPage'
import TopicsPage from './TopicsPage'
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        <li><Link to="/">Welcome</Link></li>
                        <li><Link to="/making">Making a constellation</Link></li>
                        <li><Link to="/finish">Here is your constellation</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </header>
                    <div className="pages">
                        <Route exact path="/" component={WelcomePage}/>
                        <Route path="/making" component={MakingPage}/>
                        <Route path="/finish" component={FinishPage}/>
                        <Route path="/topics" component={TopicsPage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
