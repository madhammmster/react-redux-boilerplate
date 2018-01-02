import {combineReducers} from 'redux';
import {reducer as burgerMenu} from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';

import AppReducer from './AppReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    burgerMenu: burgerMenu,
    form: formReducer
})

export default rootReducer;