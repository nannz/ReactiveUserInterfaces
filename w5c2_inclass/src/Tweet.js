/**
 * Created by zhaonan on 2018/2/28.
 */
import React, {Component} from 'react';

import './Tweet.css';

class Tweet extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Tweet">
                {this.props.name}, {this.props.body},{this.props.country}
            </div>
        );
    }
}

export default Tweet;
