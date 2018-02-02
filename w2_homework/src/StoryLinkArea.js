/**
 * Created by zhaonan on 2018/1/31.
 */

import React, { Component } from 'react';
import './StoryLinkArea.css';
import Date from './Date';
import Content from './Content'

class StoryLinkArea extends Component {
    render() {
        return (
            <div className="StoryLinkArea">
                {this.props.children}
            </div>
        );
    }
}

export default StoryLinkArea;

