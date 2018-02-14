import React, { Component } from 'react';
import './App.css';
import Character from './Character'
import Input from './Input'
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
          <Input />

          {/*{afterArray}*/}
      </div>
    );
  }
}

export default App;
