import React, { Component } from 'react';
import './App.css';
import Link from './Link.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'unemployed'
        };
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(value) {
        this.setState({
            selected: value
        });
    }
  render() {
      const showMe = true;
      const isUnemployed = this.state.selected === 'unemployed';
    return (
      <div className="App">
          {showMe && <p>Hello!</p>}
          <Link
              value="unemployed"
              selected={isUnemployed}
              onClick={this.buttonClicked}
          />
      </div>
    );
  }
}

export default App;
