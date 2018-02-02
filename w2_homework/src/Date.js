/**
 * Created by zhaonan on 2018/1/31.
 */

import React, { Component } from 'react';
import './Date.css';
class Date extends Component {


    render() {
        return (
            <div className="Date">
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default Date;