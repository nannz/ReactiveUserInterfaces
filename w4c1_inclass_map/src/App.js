import React, { Component } from 'react';
import './App.css';
import Character from './Character'

class App extends Component {


  render() {

      const someArray = ['a', 'b','c'];
      const afterArray = someArray.map((character,i)=>{
          return (
              <Character name = {character} key = {i}/>

          )
      });
    return (
      <div className="App">
          {afterArray}
      </div>
    );
  }
}

export default App;
