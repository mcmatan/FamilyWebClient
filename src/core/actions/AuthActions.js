import {SIGN_IN_ERROR, SIGN_IN_SUCCESS, SIGN_IN_SUBMIT, LOGOUT} from "./ActionTypes";
import {browserHistory} from "react-router";

export function loginSubmit() {
    return {
        type: SIGN_IN_SUBMIT
    };
}

export function signInError(error) {
    const path = '/login';
    browserHistory.push(path);
    return {
        type: SIGN_IN_ERROR,
        payload: error.message
    };
}

export function logout() {
    return dispatch => {
        // firebaseAuth.signOut().then(function () {
        //     const path = '/';
        //     browserHistory.push(path);
        //     dispatch({
        //         type: LOGOUT
        //     });
        // }, function (error) {
        //     console.log(`Error on logout = ${error}`);
        // });
    };
}

export function signInSuccess(user) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    };
}

export function signInSuccessAndRoute(user) {
    const path = '/dashboard';
    browserHistory.push(path);
    return signInSuccess(user);
}





