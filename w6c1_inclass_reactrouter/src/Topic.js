import React, {Component} from 'react';

class Topic extends Component {
    render() {
        return (
            <div className="Topic">
                <p>{this.props.match.params.topicId}</p>
            </div>
        );
    }
}

export default Topic;
