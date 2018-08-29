import React, { Component } from 'react';

// CSS FOR ENTIRE APPLICATION
import './App.css';

// IMPORT COMPONENTS
import Header from './components/Header'

// APP.JS IS ALWAYS A CLASS COMPONENT, EXTENDING THE BASE REACT.COMPONENT
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
