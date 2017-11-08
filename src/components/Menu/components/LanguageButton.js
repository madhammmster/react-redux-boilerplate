import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeLanguage} from "../../../actions/LanguageActions";

const LanguageButton = function (props) {
    return (
        <button
            type="button"
            className="btn btn-light"
            onClick={() => props.changeLanguage(props.language)}
        >
            {props.language}
        </button>
    )
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeLanguage}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LanguageButton);