/**
 * Created by zhaonan on 2018/1/31.
 */

import React, {Component} from 'react';
import './Article.css';
import Date from './Date';
import Content from './Content'

class Article extends Component {
    render() {
        return (
            <div className="Article">
                <date>{this.props.date}</date>
                <a href={this.props.storyLink} target="_blank">
                    <div className="description">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.summary}</p>
                        <p className="byLine">by {this.props.author}</p>
                    </div>
                    <figure>
                        <img src={this.props.imgSource}/>
                    </figure>
                </a>
                {/*{this.props.children}*/}
            </div>
        );
    }
}

export default Article;

