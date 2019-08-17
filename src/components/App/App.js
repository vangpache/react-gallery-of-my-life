import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  componentDidMount() {
    console.log('APP is loaded');
    this.getImages();
  }


  state = {
    images: [],
  }


  getImages = () => {
    console.log('in GET IMAGES');
    axios
    .get('/gallery')
    .then((result) => {
      console.log('GET result:', result.data);
      this.setState ({
          images: result.data
      })
    }).catch((error) => {
      console.log('GET error:', error);
    })
  }

  updateLikes = () => {
    console.log('in UpdateLikes');
    axios
    .put('/gallery')
    .then((result) => {
      console.log('updated result:', result);
    }).catch ((error) => {
      console.log('updateLikes error:', error);
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
