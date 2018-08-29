import React, { Component } from 'react';

// CSS FOR ENTIRE APPLICATION
import './App.css';

// IMPORT COMPONENTS
import Header from './components/Header'
import Paragraph from './components/Paragraph'

// APP.JS IS ALWAYS A CLASS COMPONENT, EXTENDING THE BASE REACT.COMPONENT
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  state = {
    content: ['this is my p1', 'this is my p2', 'this is my p3'],
    title: 'Hello World!'
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <Header title={this.state.title} />
        <Paragraph content={this.state.content[0]}/>
        <Paragraph content={this.state.content[1]}/>
        <Paragraph content={this.state.content[2]}/>
        <Header title={this.state.title} />
      </div>
    );
  }
}

export default App;
