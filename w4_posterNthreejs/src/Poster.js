/**
 * Created by zhaonan on 2018/2/14.
 */
import React, {Component} from 'react';
import Shape from './Shape'
import './Poster.css';
import * as THREE from 'three';

class Poster extends Component {

    render() {
        return (
            <div className="Poster">
                <h1>{this.props.eventName}</h1>
                <div>
                    <p id="location">{this.props.location}</p>
                    <p id="time">{this.props.time}</p>
                </div>
                <div id="shape">
                    <Shape shapeGeo = {this.props.shapeGeo} shapeText = {this.props.shape}/>
                    {/*<p>{this.props.shape}</p>*/}
                </div>

            </div>
        );
    }
}

export default Poster;
