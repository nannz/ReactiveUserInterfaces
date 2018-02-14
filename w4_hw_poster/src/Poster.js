/**
 * Created by zhaonan on 2018/2/14.
 */
import React, { Component } from 'react';
import './Poster.css';

class Poster extends Component {

    render() {

        return (
            <div className="Poster">
                <h1>{this.props.eventName}</h1>
                <p id="location">{this.props.location}</p>
                <p id="time">{this.props.time}</p>
            </div>
        );
    }
}

export default Poster;
