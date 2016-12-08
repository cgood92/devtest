import React from 'react'
import { connect } from 'react-redux';

import Hero from '../../views/Hero/Hero.js';

class HeroContainer extends React.Component {

	constructor(props) {
	  super(props);
	  // Initialize big image to be the first image
	  let state = {
	  	img: ((props.images || {})[0] || {}).full,
	  	loading: false
	  };
	  this.state = state;
	}

	swap(newFull) {
		return () => {
			// Don't reload the same image
			if (this.state.img !== newFull) {
				this.setState(Object.assign({}, this.state, { img: newFull, loading: true }));
			}
		};
	}

	imgLoading() {
		this.setState(Object.assign({}, this.state, {loading: false }));
	}

    render() {
		const { img, loading } = this.state;
		const { title, subtitle, images = [] } = this.props;
        return (<Hero 
        	title={title} 
        	img={img} 
        	subtitle={subtitle} 
        	tiles={images} 
        	loading={loading} 
        	handlers={{swap: this.swap.bind(this), imgLoading: this.imgLoading.bind(this)}}
        />);
    }
}

const mapStateToProps = function(store) {
    return store;
};

export default connect(mapStateToProps)(HeroContainer);
