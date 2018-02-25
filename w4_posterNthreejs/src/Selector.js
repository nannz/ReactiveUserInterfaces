/**
 * Created by zhaonan on 2018/2/14.
 */
import React, {Component} from 'react';
import './Selector.css';
class Selector extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value : "None"
        }
    }
    onChange(e){
        this.setState({
            value: e.target.value
        });
        return this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="Selector">
                <label>{this.props.label}</label>
                <select value = {this.state.value} onChange = {this.onChange}>
                    <option value="none" >None</option>
                    <option value="sphere">Sphere</option>
                    <option value="box">Box</option>
                </select>
            </div>
        );
    }
}

export default Selector;