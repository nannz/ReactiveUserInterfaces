/**
 * Created by zhaonan on 2018/2/7.
 */
import React, {Component} from 'react';


class DisplayBox extends Component {

    render() {
        return (
            <div className="DisplayBox">
                <p>{this.props.count}</p>
            </div>
        );
    }
}

export default DisplayBox;
