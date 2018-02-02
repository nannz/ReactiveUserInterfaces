/**
 * Created by zhaonan on 2018/1/31.
 */
import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
    render() {
        return (
            <div className="Tweet">
                <p>This is a tweet.{this.props.tweetText}</p>
                </div>
        );
    }
}

export default Tweet;
