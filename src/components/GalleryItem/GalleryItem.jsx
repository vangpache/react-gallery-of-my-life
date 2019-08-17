import React, { Component } from 'react';


class GalleryItem extends Component {

    //CONDITIONAL RENDERING ON CLICK BUTTON TO SHOW PHOTO DESCRIPTION

    state = {
        showDescription: true
    }

    handleDescription = () => {
        console.log('photo was clicked for description');
        this.setState({
            showDescription: !this.state.showDescription
        })  
    }


    render() {
        let imageToRender;
        if (this.state.showDescription) {
            imageToRender = <div className="imageDivs">
                <img src={this.props.image.path}
                    alt={this.props.image.description}
                    key={this.props.image.id}
                    className="image"
                    onClick={this.handleDescription} />
            </div>
        } else {
            imageToRender = <div className="imageDivs"
                onClick={this.handleDescription}>
                <p className="textRendering">{this.props.image.description}</p>
            </div>
        }


        return (
            <div className="imageDivs">
                {imageToRender}
                <br/>
                <button onClick={() => this.props.updateLikes(this.props.image.id)}>like this photo</button>
                <h6><span>{this.props.image.likes}</span> likes</h6>
            </div>
            
        )
    }
}


export default GalleryItem;