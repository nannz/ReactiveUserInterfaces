/**
 * Created by zhaonan on 2018/1/31.
 */

import React, { Component } from 'react';
import './Content.css';
class Content extends Component {
    render() {
        return (
            <div className="Content">
                <h1 className = "title">{this.props.title}</h1>
                <p className = "summary">{this.props.summary}</p>
                <p className = "author">By {this.props.author}</p>
            </div>
        );
    }
}

export default Content;

