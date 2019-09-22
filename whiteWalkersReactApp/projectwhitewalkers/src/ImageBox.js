import React from 'react';
import { Component } from 'react';

class ImageBox extends Component {
    constructor(props) {
        super(props);
        this.onClassifyBtnClicked = this.onClassifyBtnClicked.bind(this);
    }
    onClassifyBtnClicked = (e) => {
        console.log(this.state);
    };

    render() {
        return (
            <div className="ImageBox">
                <img src={this.props.imageData.url} alt="picture" height="100" width="100"/>
            </div>
        );
    }
}
    
export default ImageBox;