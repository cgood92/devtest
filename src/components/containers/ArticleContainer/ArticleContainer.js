import React from 'react'
import { connect } from 'react-redux';

import ArticleView from '../../views/Article/Article.js';

import data from './_data.js';

class ArticleContainer extends React.Component {

    render() {
        return (<ArticleView {...data}/>);
    }
}

const mapStateToProps = function(store) {
    return store;
};

export default connect(mapStateToProps)(ArticleContainer);
