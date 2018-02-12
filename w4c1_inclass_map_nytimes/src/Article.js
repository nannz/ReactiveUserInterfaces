/**
 * Created by zhaonan on 2018/2/12.
 */
import React, {Component} from 'react';

class Article extends Component {

    render() {
        return (
            <div className="Article">
                <h2>{this.props.title}</h2>
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default Article;
