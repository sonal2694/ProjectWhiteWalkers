import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageBox from './ImageBox'

class Panel extends Component {
    constructor(props) {
        super(props);
        this.onClassifyBtnClicked = this.onClassifyBtnClicked.bind(this);
    }
    onClassifyBtnClicked = (e) => {
        console.log(this.state);
    };

    render() {
		const images = []
		for (let key in this.props.imageModels) {
		images.push( <ImageBox imageData={this.props.imageModels[key]}/> );
		}

        return (
            <div className="PanelBox" style={styles.panelBox}>
                <div style={styles.title}>
					<span>{this.props.title}</span>
					<FontAwesomeIcon icon={this.props.faIcon} color={this.props.iconColor}/>
				</div>
				<div>
					{images}
				</div>
            </div>
        );
    }
}

const styles = {
	title: {
		fontSize: '24px',
		marginTop: '21px',
		marginBottom: '36px',
		fontWeight: 800,
		borderBottom: '0px solid #81D4FA'
	},
	panelBox: {
		width: '45vw',
		float: 'left',
		borderLeft: '3px solid #B3E5FC',
		height: '90vh',
		padding: '5px',
		paddingBottom: '200px',
		
	}
};
    
export default Panel;