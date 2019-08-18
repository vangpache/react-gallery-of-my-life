import React, { Component } from 'react';




class GalleryForm extends Component {



    render () {




        return (
            <div className="col no-gutters">
                <div className="rightside">
                    <h4>Add a New Post:</h4>
                    <input  type="text" 
                            placeholder="Description of Photo" 
                            className="inputs" 
                            value={this.props.newPost.description}
                            // datatype={this.props.newPost.id = this.props.images.length}
                            onChange={this.props.handleChangeInputs('description')} /><br />
                    <input  type="url" 
                            placeholder="URL of image here" 
                            className="inputs" 
                            value={this.props.newPost.path}
                            onChange={this.props.handleChangeInputs('path')} 
                            />

                    <button onClick={this.props.handleSubmitNew}>Submit New Event</button>
                </div>
            </div>
        )
    }
}



export default GalleryForm;