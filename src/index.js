import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'
import Root from './components/Root'

let store = createStore(RootReducer);

ReactDOM.render( <Root store={store} />, document.getElementById('root') );