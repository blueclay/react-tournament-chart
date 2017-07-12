import React, { Component } from 'react';
import './App.css';
import Tournament from './component/Tournament';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">  
        </div>
        <Tournament />
      </div>
    );
  }
}

export default App;
