/**
 * Created by zhaonan on 2018/2/7.
 */
import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button type = "button" onClick = {this.props.onClick}>{this.props.label}</button>
        );
    }
}

export default Button;
