import React, {Component} from 'react';
import './App.css';
import Dropdown from './Dropdown'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import MakingPage from './Pages/MakingPage'
import {TransitionGroup, CSSTransition} from "react-transition-group";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router location={this.props.location}>
                <div className="App">
                    {/*<Dropdown/>*/}
                    <div className="pages">
                        <TransitionGroup>
                            {/* no different than other usage of CSSTransition, just make sure to pass `location` to `Switch` so it can match the old location as it animates out */}
                            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                <Switch location={location}>
                                    <Route exact path="/" component={LandingPage}/>
                                    <Route path="/generate" component={MakingPage}/>
                                    <Route render={() => <div>Not Found</div>}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
