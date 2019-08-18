import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {
  componentDidMount() {
    console.log('APP is loaded');
    this.getImages();
  }


  state = {
    images: [],
    newPost: {
      id: '',
      path: '',
      description: '',
      likes: 0
    },
  }


  getImages = () => {
    console.log('in GET IMAGES');
    axios
      .get('/gallery')
      .then((result) => {
        console.log('GET result:', result.data);
        this.setState({
          images: result.data
        })
      }).catch((error) => {
        console.log('GET error:', error);
      })
  }

  updateLikes = (id) => {
    console.log('in UpdateLikes');
    axios
      .put(`/gallery/like/${id}`)
      .then((result) => {
        console.log('updated result:', result);
        this.getImages();
      }).catch((error) => {
        console.log('updateLikes error:', error);
      })
  }


  handleChangeInputs = (propertyValue) => (event) => {
    this.setState({
      newPost: {
        ...this.state.newPost,
        [propertyValue]: event.target.value,
      }
    });
  }


  handleSubmitNew = (event) => {
        console.log('submit button was clicked');
        this.setState({
          images: [...this.state.images, this.state.newPost]
        })
        this.addNewImage();
    }

  addNewImage = () => {
    console.log('in ADDnewImage', this.state.images);
    axios
    .post('/gallery', this.state.newPost)
    .then((result) => {
      console.log('POST created:', result);
      this.getImages();
    }).catch ((error) => {
      console.log('POST not created, error:', error);
    })
  }


  render() {
    return (

      <div className="App">

        <div>
          <header className="jumbotron">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          {/* {JSON.stringify(this.state)} */}
        </div>

        <div className="row no-gutters">
          <div className="col-9 no-gutters">
            <div className="leftside">
              <GalleryList images={this.state.images} updateLikes={this.updateLikes} />
            </div>
          </div>

          <GalleryForm  handleSubmitNew={this.handleSubmitNew} 
                        handleChangeInputs={this.handleChangeInputs} 
                        newPost={this.state.newPost}
                        images={this.state.images}/>
        </div>
      </div>

    );
  }
}

export default App;
