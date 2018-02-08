/**
 * Created by zhaonan on 2018/2/7.
 */
import React, {Component} from 'react';
import './DisplayBox.css';

class DisplayBox extends Component {

    render() {
        return (
            <div className="DisplayBox">
                <p>You have selected: {this.props.currentBtn} Button</p>
            </div>
        );
    }
}

export default DisplayBox;
