import React, { Component } from 'react';




class GalleryForm extends Component {




    render () {




        return (
            <div className="col no-gutters">
                <div className="rightside">
                    <input  type="text" 
                            placeholder="Description of Photo" 
                            className="inputs" 
                            value={this.props.newPost.description}
                            datatype={this.props.newPost.id = this.props.images.length}
                            onChange={this.props.handleChangeInputs('description', 'id')} /><br />
                    <input  type="url" 
                            placeholder="URL of image here" 
                            className="inputs" 
                            value={this.props.newPost.url}
                            onChange={this.props.handleChangeInputs('url')} 
                            />

                    <button onClick={this.props.handleSubmitNew}>Submit New Event</button>
                </div>
            </div>
        )
    }
}







export default GalleryForm;