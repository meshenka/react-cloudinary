/**
 * @file ./src/index.jsx
 * @see https://reactjsnews.com/react-js-with-cloudinary
 */
//import dotenv from 'dotenv'
import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import Config from "./env.js"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }

        this.env = Config
    }
    componentDidMount() {
        // Request for images tagged xmas       
        axios.get('https://res.cloudinary.com/'+ this.env.APP_CLOUD_NAME +'/image/list/xmas.json')
            .then(res => {
                console.log(res.data.resources);
                //this.setState({gallery: res.data.resources});
                this.setState({gallery: this.state.gallery.concat(res)})
            });
    }
    
    uploadWidget() {
        cloudinary.openUploadWidget({ cloud_name: this.env.APP_CLOUD_NAME, upload_preset: this.env.APP_CLOUD_PRESET, tags:['xmas']},
            function(error, result) {
                console.log(result);
                this.setState({gallery: this.state.gallery.concat(res)})
            });
    }
    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName={ this.env.APP_CLOUD_NAME }>
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" href={`http://res.cloudinary.com/${this.env.APP_CLOUD_NAME}/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>
        );
    }}

render(<Main />, document.getElementById('container'));