import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Topic from './Topic'
class TopicsPage extends Component {

    render() {
        return (
            <Router>
                <div className="TopicsPage">


                    <header>
                        <ul>
                            <li>
                                <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/components`}>Components</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                            </li>
                        </ul>
                    </header>
                    <div className="pages">
                        <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
                        <Route
                            exact
                            path={this.props.match.url}
                            render={() => <h3>Welcome! Please select a topic.</h3>}
                        />
                    </div>

                </div>
            </Router>
        );
    }
}

export default TopicsPage;
