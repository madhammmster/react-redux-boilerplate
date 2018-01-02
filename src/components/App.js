import React from 'react'
import {connect} from 'react-redux'

//Components
import Menu from "./Menu/Menu";
import View from "./View/View";

//Views
import Main from '../views/Main';
import Demo from '../views/Demo';

import Styles from '../styles/AppStyles.scss';

const views = [
    {name: 'Main', link: '/', component: Main, exact: true},
    {name: 'Demo', link: '/demo', component: Demo, exact: false}
];

class App extends React.Component {
    render() {
        return (

            <div id="outer-container">
                <Menu menuItems={views}/>


                <main id="page-wrap">
                    <div className="container-top-bar">
                        <div className="top-bar"></div>
                    </div>
                    <div className="container-views">
                        {views.map((view) => <View key={view.name} item={view}/>)}
                    </div>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null, null, {pure: false})(App)