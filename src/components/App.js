import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import {connect} from 'react-redux'
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Menu from './Menu/Menu';
import View from './View/View'
//Views
import Main from '../views/Main';
import Demo from '../views/Demo';

const views = [
    {name: 'Main', link: '/', component: Main, exact: true},
    {name: 'Demo', link: '/demo', component: Demo, exact: false}
];

class App extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router>
                    <div className="container-fluid">
                        <div className="row">

                            <Menu menuItems={views}/>

                            <div className='container-content col-10 offset-2'>
                                {views.map((view) => <View key={view.name} item={view}/>)}
                            </div>

                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null, null, {pure: false})(App)