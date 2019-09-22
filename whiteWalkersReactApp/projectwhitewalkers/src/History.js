import React from 'react';
import { Component } from 'react';

import Panel from './Panel'

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

class History extends Component {
    constructor(props) {
        super(props);
        this.onClassifyBtnClicked = this.onClassifyBtnClicked.bind(this);
    }
    onClassifyBtnClicked = (e) => {
        console.log(this.state);
    };

    render() {
        return (
            <div className="historyBox" style={styles.historyBox}>
                <div className="recentlyViewedTitle" style={styles.title}>
					Recently viewed
				</div>
				<div className="panelContainer" style={styles.panelContainer}>
					<Panel title={"... unsafe"} iconColor={"#ef5350"} faIcon={faExclamationTriangle} imageModels={this.props.iceImages}/>
					<Panel title={"... safe"} iconColor={"#66BB6A"} faIcon={faThumbsUp} imageModels={this.props.noIceImages}/>
				</div>
            </div>
        );
    }
}

const styles = {
	historyBox: {
		// textAllign: 'left',
		marginTop: '3%'
	},
	title: {
		fontSize: '34px',
		textAlign: 'left',
		margin: '2%',
		marginBottom: '0',
		borderBottom: '3px solid #B3E5FC',
	}
};
    
export default History;