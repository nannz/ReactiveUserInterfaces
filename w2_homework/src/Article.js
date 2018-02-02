/**
 * Created by zhaonan on 2018/1/31.
 */

import React, { Component } from 'react';
import './Article.css';
import Date from './Date';
import Content from './Content'

class Article extends Component {
    render() {
        return (
            <div className="Article">
                {/*<p>I am the article {this.props.articleId} container.</p>*/}
                {/*<Date date="Jan 31, 2018"/>*/}
                {this.props.children}
                {/*<Content title = "title_test" summary = "summary_test" author = "Rune Madson"/>*/}
            </div>
        );
    }
}

export default Article;

