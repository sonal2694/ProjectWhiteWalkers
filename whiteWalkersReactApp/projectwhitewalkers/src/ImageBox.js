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
            <div className="ImageBox" style={styles.imageBox}>
                <img src={this.props.imageData.url} alt="picture" height="300" width="300"/>
            </div>
        );
    }
}

const styles={
    imageBox: {
        float: 'left',
        margin: '5px'
    }
};
export default ImageBox;