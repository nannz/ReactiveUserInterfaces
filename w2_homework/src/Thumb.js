/**
 * Created by zhaonan on 2018/2/2.
 */

import React, { Component } from 'react';
import './Thumb.css';
class Thumb extends Component {


    render() {
        return (
            <div className="Thumb">
                <img src = {this.props.imgSource}/>
            </div>
        );
    }
}

export default Thumb;