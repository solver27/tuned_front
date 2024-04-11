import { combineReducers } from 'redux';

import authReducer from './auth';
import menuReducer from './menu';
import sportsReducer from './sports';
import p2pReducer from './p2p';
import alertReducer from './alert';
import loadReducer from './load';

const reducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    sports: sportsReducer,
    p2p: p2pReducer,
    alert: alertReducer,
    load: loadReducer,
});

export default reducer;
