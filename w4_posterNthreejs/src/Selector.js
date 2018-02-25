/**
 * Created by zhaonan on 2018/2/14.
 */
import React, {Component} from 'react';
import './Selector.css';
import * as THREE from 'three';

class Selector extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value : "none"
        }
    }
    onChange(e){
        this.setState({
            value: e.target.value
        });
        if(this.state.value === "box"){
            return this.props.onChange( e.target.value,new THREE.BoxGeometry(20, 20, 20));
        }else if (this.state.value === "sphere"){
            return this.props.onChange( e.target.value,new THREE.SphereGeometry(15, 20, 20));
        }else{
            return this.props.onChange( e.target.value,new THREE.BoxGeometry(1, 1, 1));
        }

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