import React, {Component} from 'react';
import './App.css';
import Article from './Article'

class App extends Component {


    render() {
// javascript object
        const articles = [
            {
                title: "title 1",
                date: "date 1"
            },
            {
                title: "title 2",
                date: "date 2"
            },
            {
                title: "title 3",
                date: "date 3"
            }];

        const outputs = articles.map((articles, i) => {
            return (
                <Article id={i}
                         title={articles.title}
                         date = {articles.date}
                />
            )
        });


        return (
            <div className="App">
                {outputs}
            </div>
        );
    }
}

export default App;
