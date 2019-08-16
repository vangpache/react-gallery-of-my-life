import React, { Component } from 'react';


class GalleryItem extends Component {

    //CONDITIONAL RENDERING ON CLICK BUTTON TO SHOW PHOTO DESCRIPTION

    handleDescription = () => {
        console.log('photo was clicked for description');
        
    }

    render() {


        return (

            <div className="imageDivs">
                <img    src={this.props.image.path} 
                        alt={this.props.image.description} 
                        key={this.props.image.id} 
                        className ="image"
                        onClick={this.handleDescription}/><br/>
                <button>like this photo</button>
            </div>
        )
    }
}








export default GalleryItem;