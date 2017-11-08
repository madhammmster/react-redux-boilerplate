import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import Styles from './styles/Menu.scss';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    renderMenuItems() {
        const items = this.props.menuItems.map((menuItem, index) => (
            <li className="nav-item" key={menuItem.name}>
                <NavLink exact className="nav-link" to={menuItem.link}>{menuItem.name}</NavLink>
            </li>
        ));

        return items;
    }


    render() {

        return (
            <div className="container-menu col-2">
                <div className="container-logo">

                </div>

                <ul className="nav flex-column">
                    {this.renderMenuItems()}
                </ul>

                <h6>
                   App status: {this.props.status}
                </h6>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null, null, {pure: false})(Menu);