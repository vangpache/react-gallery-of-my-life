import React, { Component } from 'react';


class GalleryItem extends Component {

    //CONDITIONAL RENDERING ON CLICK BUTTON TO SHOW PHOTO DESCRIPTION

    state = {
        showDescription: false
    }

    handleDescription = () => {
        console.log('photo was clicked for description');
        this.setState({
            showDescription: !this.state.showDescription
        })  
    }

    render() {



        return (

            <div className="imageDivs">
                <img    src={this.props.image.path} 
                        alt={this.props.image.description} 
                        key={this.props.image.id} 
                        className ="image"
                        onClick={this.handleDescription}/>


                        {/* conditional truth/falsie for image description use */}
                        {this.state.showDescription &&
                        <div className="imageDivs">
                            <p>{this.props.image.description}</p>
                        </div>}
                        <br/>
                <button>like this photo</button>
            </div>
        )
    }
}








export default GalleryItem;