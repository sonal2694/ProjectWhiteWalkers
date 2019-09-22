import React from 'react';
import { Component } from 'react';
import ImageBox from './ImageBox'

const classNames = require('classnames');

class Result extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			display: props.display
		};
    }
    

    render() {

		let innerBoxStyle = styles.resultInnerBox;
		let outterBoxStyle = Object.assign({}, styles.resultBox, {display: this.props.display ? 'block' : 'none'})

        return (
            <div className="resultBox" style={outterBoxStyle}>
                <div className="resultInnerBox" style={innerBoxStyle}>
					<div style={styles.msg}>{this.props.msg}</div>
					<img src={this.props.imageModel.url} style={styles.img} alt="picture" height="300" width="300"/>
				</div>
            </div>
        );
    }
}

let styles = {
	resultBox: {
		position: 'fixed',
		left: 0,
		top: 0,
		zIndex: 9999,
		width: '100vw',
		height: '100vh',
		opacity: 1,
		backgroundColor: '#222',
		
	},
	resultInnerBox: {
		position: 'absolute',
		left: '25vw',
		top: '20vh',
		width: '50vw',
		height: '80vh',
		backgroundColor: '#fff',
		opacity: 1,
		paddingTop: '20px'
	},
	closeBtn: {
		position: 'absolute',
		bottom: '15%',
		width: '120px',
		left: '46%',
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
		margin: '5%'
	},
	img: {
		// position: 'relative',
		// top: '100px'
	}
};
    
export default Result;