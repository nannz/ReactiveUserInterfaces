import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            articles: [],
            error:null
        }
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2663a6d57fc14ea28fb2c6aa07827f5d')//new way to loading json or other data from js
            .then(response => {
                if (response.ok) {
                    return response.json();
                }else{
                    throw new Error("Something went wrong ...");
                }
            })
            .then(data => {
                this.setState({
                    isLoading: false,
                    articles: data.response.docs
                })
            })
            .catch(error => this.setState({ error: error, isLoading: false }));
    }

    render() {
        let listOfArticles = this.state.articles.map((article, i) => {
            return (
                <div className={"article" + i}>
                    <h1>{article.headline.main}</h1>
                    <p>{article.snippet}</p>
                    <a href={article.web_url}>Go to the article-></a>
                </div>
            );
        });
        console.log(this.state.articles[0]);
        if (this.state.isLoading) {
            return (
                <div className="App">
                    <p>Loading...</p>
                </div>
            );
        } else {
            return (
                <div className="App">
                    {listOfArticles}
                </div>
            );
        }
    }
}

export default App;
