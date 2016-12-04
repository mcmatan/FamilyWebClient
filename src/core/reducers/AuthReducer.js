import { SIGN_IN_ERROR, SIGN_IN_SUCCESS, SIGN_IN_SUBMIT } from '../actions/ActionTypes';

const AuthReducer = (state = [], action) => {
    switch (action.type) {
        case SIGN_IN_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false,
                loginError: action.payload
            });
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                loginError: ""
            });
        case SIGN_IN_SUBMIT:
            return Object.assign({}, state, {
                loginError: ""
            });
        default:
            return state
    }
}

export default AuthReducer