import React, {Component} from 'react';
import './Dropdown.css';
import {CSSTransition} from "react-transition-group";

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false,
        }
    }

    toggleDropDown() {
        this.setState({
            showDropDown: !this.state.showDropDown,
        })
    }


    render() {
        return (
            <div className='Dropdown'>
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

        );
    }
}

export default Dropdown;
