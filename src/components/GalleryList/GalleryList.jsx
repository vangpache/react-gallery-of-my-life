import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {



    render() {

        let displayImages = this.props.images.map(image => {
            return (

                <GalleryItem image={image} />

    
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