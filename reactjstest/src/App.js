import React, { Component } from 'react';
import './App.css';
import DragonCurve from './DragonCurve';

class App extends Component {
  render() {
    console.log( "App.js" );
    return (
      <div>
        <DragonCurve />
      </div>
    );
  }
}


export default App;
