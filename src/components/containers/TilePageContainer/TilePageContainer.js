import React from 'react'
import { connect } from 'react-redux';

import TilePage from '../../views/TilePage/TilePage.js';

import data from './_data.js';

class TilePageContainer extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {active: false};
	}

	play() {
		this.setState(Object.assign({}, this.state, { active: true }));
	}

    render() {
    	const { active } = this.state;
        return (<TilePage 
        	{...data} 
        	active={active} 
        	handlers={{play: this.play.bind(this)}}
        />);
    }
}

const mapStateToProps = function(store) {
    return store;
};

export default connect(mapStateToProps)(TilePageContainer);
