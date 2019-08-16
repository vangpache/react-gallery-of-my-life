import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {



    render() {

        let displayImages = this.props.images.map(image => {
            return (

                <GalleryItem image={image} />

                // <div className="imageDivs">
                //     <img src={image.path} alt={image.description} key={image.id} className ="image"/>
                // </div>
            )
        })


        return (


            
            <div>
                {displayImages}
                
            </div>



        )
    }
}







export default GalleryList;