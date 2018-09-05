import React, { Component } from 'react';

// CSS FOR ENTIRE APPLICATION
import './App.css';

// IMPORT COMPONENTS
import Header from './components/Header'
import Paragraph from './components/Paragraph'
import GifList from './components/GifList'
import GifCounter from './components/GifCounter'

const API_URL='https://gif-api-practice.herokuapp.com/gifs'

// APP.JS IS ALWAYS A CLASS COMPONENT, EXTENDING THE BASE REACT.COMPONENT
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  state = {
    content: ['this is my p1', 'this is my p2', 'this is my p3'],
    title: 'Hello World!',
    gifs: []
  }

  deleteGif = (event) => {
    // console.log(event)
    event.preventDefault()
    // modify gifs array on state
    // set state with new array (gif removed)
    console.log('hey from delete')
  }

  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          gifs: data,
        })
        console.log('state=', this.state)
      })
  }



  render() {
    const paragraphs = this.state.content.map((sentence, index) => {
      return <Paragraph key={index} content={sentence} />
    })

    return (
      <div className="App">
        <Header title={this.state.title} />
        <GifCounter count={this.state.gifs.length} />
        {paragraphs}
        <GifList  gifs={this.state.gifs}
                  deleteGif={this.deleteGif} />
        <Header title={this.state.title} />
      </div>
    );
  }
}

export default App;
