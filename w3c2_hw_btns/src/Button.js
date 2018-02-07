/**
 * Created by zhaonan on 2018/2/7.
 */
import React, {Component} from 'react';
import './Button.css';
class Button extends Component {

    constructor(props) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(e) {
        e.preventDefault;
        return this.props.onClick(this.props.label);
    }

    render() {
        const isSelected = this.props.isSelected;

        if (isSelected) {
            return (
                <button type="button" onClick={this.buttonClicked} className = "selectedBtn">The {this.props.label} Button</button>
            );
        } else {
            return (
                <button type="button" onClick={this.buttonClicked} className = "unSelectedBtn">The {this.props.label} Button</button>
            );
        }

    }
}

export default Button;
