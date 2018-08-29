import React, { Component } from 'react';

// CSS FOR ENTIRE APPLICATION
import './App.css';

// IMPORT COMPONENTS
import Header from './components/Header'
import Paragraph from './components/Paragraph'

// APP.JS IS ALWAYS A CLASS COMPONENT, EXTENDING THE BASE REACT.COMPONENT
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'Hello world!'} />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Header title={'Goodbye world!'} />
      </div>
    );
  }
}

export default App;
