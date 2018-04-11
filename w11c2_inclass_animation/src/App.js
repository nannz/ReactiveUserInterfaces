import React, {Component} from 'react';
import './App.css';
import {CSSTransition} from "react-transition-group";
import Button from './Button'

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            showDropDown: false,
        }
    }

    toggleDropDown(){
        this.setState({
            showDropDown: !this.state.showDropDown,
        })
    }


    render() {
        return (
            <div className="App">
                <div className='dropDown'>
                    <button className='dropDown-btn' onClick={this.toggleDropDown.bind(this)}>Drop Down</button>
                    <CSSTransition
                        in={this.state.showDropDown}
                        timeout={500}
                        classNames="dropDown-content"
                        unmountOnExit
                    >
                        <div className='dropDown-content'>
                            <ul>
                                <li>I am the drop down</li>
                                <li>I am the drop down</li>
                                <li>I am the drop down</li>
                                <li>I am the drop down</li>
                                <li>I am the drop down</li>
                            </ul>
                        </div>
                    </CSSTransition>
                </div>
            </div>
        );
    }
}

export default App;
