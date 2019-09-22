import React from 'react';
import { Component } from 'react';
import ImageBox from './ImageBox'

class Result extends Component {
    constructor(props) {
        super(props);
        this.onCloseBtnClicked = this.onCloseBtnClicked.bind(this);
    }
    onCloseBtnClicked = (e) => {
        console.log(this.state);
    };

    render() {

		let innerBoxStyle = styles.resultInnerBox;
		innerBoxStyle.color = this.props.color;

        return (
            <div className="resultBox" style={styles.resultBox}>
                <div className="resultInnerBox" style={innerBoxStyle}>
					<div style={styles.msg}>{this.props.msg}</div>
					<button type = "button" style = {styles.closeBtn} onClick = {(e) => this.onCloseBtnClicked(e)}>Close</button>
					<img src={this.props.imageModel.url} style={styles.img} alt="picture" height="300" width="300"/>
				</div>
				
            </div>
        );
    }
}

const styles = {
	resultBox: {
		position: 'fixed',
		left: 0,
		top: 0,
		zIndex: 9999,
		width: '100vw',
		height: '100vh',
		opacity: 0.9,
		backgroundColor: '#222'
	},
	resultInnerBox: {
		position: 'absolute',
		left: '25vw',
		top: '20vh',
		width: '50vw',
		// height: '40vh',
		backgroundColor: '#fff',
		opacity: 1,
		paddingTop: '20px'
	},
	closeBtn: {
		position: 'absolute',
		// bottom: '20px',
		// left: '45%',
		cursor: 'pointer',
		padding: '20px',
		color: '#fff',
		backgroundColor: '#009688',
		borderRadius: '5px',
		border: 0,
		fontWeight: 800

	},
	msg: {
		fontSize: '36px',
		fontWeight: 800,
	},
	img: {
		// position: 'relative',
		// top: '100px'
	}
};
    
export default Result;