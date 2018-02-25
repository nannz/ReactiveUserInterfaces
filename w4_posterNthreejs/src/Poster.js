/**
 * Created by zhaonan on 2018/2/14.
 */
import React, {Component} from 'react';
import Shape from './Shape'
import './Poster.css';

class Poster extends Component {

    render() {

        return (
            <div className="Poster">
                <h1>{this.props.eventName}</h1>
                <div>
                    <p id="location">{this.props.location}</p>
                    <p id="time">{this.props.time}</p>
                </div>
                <div id="shape"><p>{this.props.shape}</p><Shape /></div>

            </div>
        );
    }
}

export default Poster;
