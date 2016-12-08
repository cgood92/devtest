import React from 'react'
import { connect } from 'react-redux';

import TilesPage from '../../views/TilesPage/TilesPage.js';

import data from './_data.js';

class TilesPageContainer extends React.Component {

    render() {
        return (<TilesPage {...data}/>);
    }
}

const mapStateToProps = function(store) {
    return store;
};

export default connect(mapStateToProps)(TilesPageContainer);
