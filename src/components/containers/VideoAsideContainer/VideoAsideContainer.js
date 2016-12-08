import React from 'react'
import { connect } from 'react-redux';

import VideoAside from '../../views/VideoAside/VideoAside.js';

class VideoAsideContainer extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = { active: false };
	}

	play() {
		// If a player object was initialized by way of the React ref callback in VideoAside
		if (this.playerObj) {
			this.playerObj.play();
		}

		this.setState(Object.assign(this.state, { active: true }));

		// Extend other functionality
		if (this.props.handlers && this.props.handlers.play) {
			this.props.handlers.play();
		}
	}

	// For use in ref callback
	assignPlayer(obj) {
		this.playerObj = obj;
	}

    render() {
		const { thumbnail, sources = [], title, subtitle } = this.props;
		const { active = false } = this.state;
    	return (<VideoAside 
    		thumbnail={thumbnail} 
    		sources={sources} 
    		title={title} 
    		subtitle={subtitle} 
    		active={active} 
    		handlers={{play: this.play.bind(this), assignPlayer: this.assignPlayer.bind(this)}}
    	/>);
    }
}

const mapStateToProps = function(store) {
    return store;
};

export default connect(mapStateToProps)(VideoAsideContainer);
