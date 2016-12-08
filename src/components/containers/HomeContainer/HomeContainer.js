import React from 'react'
import { connect } from 'react-redux';

import HomeView from '../../views/Home/Home.js';

class HomeContainer extends React.Component {

    render() {
    	const links = [{
    		href: '/article',
    		title: 'Article',
    		img: '/images/Article.jpg'
    	}, {
    		href: '/tile',
    		title: 'Tile',
    		img: '/images/Tile.jpg'
    	}, {
            href: '/tiles',
            title: 'Tiles',
            img: '/images/Tiles.jpg'
        }];
        return (<HomeView links={links}/>);
    }
}

const mapStateToProps = function(store) {
    return store;
};

export default connect(mapStateToProps)(HomeContainer);
