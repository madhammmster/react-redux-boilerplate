import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App';

//Styles
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

function Root(props) {
    return (
        <Provider store={props.store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    )
}

export default Root