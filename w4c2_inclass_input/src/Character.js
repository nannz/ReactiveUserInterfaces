import React, {Component} from 'react';

class Character extends Component {

    render() {
        return (
            <div className="Character">
                <button>I am {this.props.name}, click me!</button>
            </div>
        );
    }
}

export default Character;
