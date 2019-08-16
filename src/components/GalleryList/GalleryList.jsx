import React, { Component } from 'react';


class GalleryList extends Component {



    render() {

        let displayImages = this.props.images.map(image => {
            return (
                <div className="imageDivs">
                    <img src={image.path} alt={image.description} key={image.id} className ="image"/>
                </div>
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