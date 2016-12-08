import React from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import MainLayout from '../../views/MainLayout/MainLayout.js';

const pathMap = {
  '/': null,
  '/article': 'Article',
  '/tile': 'Tile',
  '/tiles': 'Tiles'
};

class MainLayoutContainer extends React.Component {

  render() {
    const activePage = pathMap[this.props.location.pathname];
    return (<MainLayout 
    	children={this.props.children} 
    	activePage={activePage}
    />);
  }
}

const mapStateToProps = function(store) {
    return store;
};

export default connect(mapStateToProps)(withRouter(MainLayoutContainer));
