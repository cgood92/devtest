import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import router from './Router';

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('app'));