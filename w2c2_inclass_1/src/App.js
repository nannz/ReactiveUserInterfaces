import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Tweet tweetText = "Tweet 1"/>
          <Tweet tweetText = "Tweet 2"/>
          <Tweet tweetText = "Tweet 3"/>
      </div>
    );
  }
}

export default App;
