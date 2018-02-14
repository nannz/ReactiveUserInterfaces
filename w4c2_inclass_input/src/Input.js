/**
 * Created by zhaonan on 2018/2/14.
 */
import React, {Component} from 'react';
import './Input.css';
class Input extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: ''
        }
    }
    onChange(e){
        console.log(e.target.value);
        let txt = e.target.value;

        this.setState({
            value: txt.replace('Nan', 'Ana')
        })
    }
    render() {
        return (
            <div className="Input">
                <input type = "text" onChange = {this.onChange} value = {this.state.value}/>
            </div>
        );
    }
}

export default Input;
