/**
 * Created by zhaonan on 2018/2/14.
 */
import React, {Component} from 'react';
import './Input.css';
class Input extends Component {
    constructor(props){
         super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        return this.props.onChange(e.target.value);
    }
    render() {
        return (
            <div className="Input">
                <h2>{this.props.label}</h2>
                <input type = "text" onChange = {this.onChange} />
            </div>
        );
    }
}

export default Input;
