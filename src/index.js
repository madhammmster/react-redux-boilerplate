import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'
import App from './components/App'

let store = createStore(RootReducer);

ReactDOM.render( <App store={store} />, document.getElementById('root') );