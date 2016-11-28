import { SIGN_IN_ERROR, SIGN_IN_SUCCESS } from '../actions/ActionTypes';

const AuthReducer = (state = [], action) => {
    switch (action.type) {
        case SIGN_IN_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false
            });
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true
            });
        default:
            return state
    }
}

export default AuthReducer