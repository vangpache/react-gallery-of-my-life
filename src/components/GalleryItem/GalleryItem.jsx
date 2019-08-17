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

                <br />
                <button>like this photo</button>
            </div>
        } else {
            imageToRender = <div className="imageDivs"
                onClick={this.handleDescription}>
                <p>{this.props.image.description}</p>
                <br />
                <button>like this photo</button>
            </div>
        }


        return (
            <div className="imageDivs">
                {imageToRender}
            </div>
            
        )
    }
}




// {
//     this.state.showDescription &&
//         <div>
//             <p>{this.props.image.description}</p>
//         </div>
// } 



// if(this.state.showDescription) {
//                     <div className="imageDivs">
//                         <img src={this.props.image.path}
//                             alt={this.props.image.description}
//                             key={this.props.image.id}
//                             className="image"
//                             onClick={this.handleDescription} />

//                         <br />
//                         <button>like this photo</button>
//                     </div>
//                 } else {
//                     <h1>HEEYYY!!!</h1>
//                 }




export default GalleryItem;