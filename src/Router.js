import { Router, Route, hashHistory } from 'react-router'

import HomeContainer from './components/containers/HomeContainer/HomeContainer.js'
import ArticleContainer from './components/containers/ArticleContainer/ArticleContainer.js'
import MainLayoutContainer from './components/containers/MainLayoutContainer/MainLayoutContainer.js'
import TilePageContainer from './components/containers/TilePageContainer/TilePageContainer.js'
import TilesPageContainer from './components/containers/TilesPageContainer/TilesPageContainer.js'

export default (
    <Router history={hashHistory}>
        <Route component={MainLayoutContainer}>
            <Route path="/" component={HomeContainer} />
            <Route path="/article" component={ArticleContainer} />
            <Route path="/tile" component={TilePageContainer} />
            <Route path="/tiles" component={TilesPageContainer} />
        </Route>
    </Router>
);
