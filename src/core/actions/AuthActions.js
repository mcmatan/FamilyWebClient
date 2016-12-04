import {firebaseAuth} from "../../core/firebase";
import {SIGN_IN_ERROR, SIGN_IN_SUCCESS, SIGN_IN_SUBMIT} from "./ActionTypes";
import { browserHistory } from 'react-router'


export function login(values) {
    const email = values.username;
    const password = values.password;
    return dispatch => {
        dispatch(loginSubmit());
        firebaseAuth.signInWithEmailAndPassword(email, password).then(function(user) {
            dispatch(signInSuccess(user));
        }).catch(function(error) {
            dispatch(signInError(error));
        });
    };
}

export function loginSubmit() {
    return {
        type: SIGN_IN_SUBMIT
    };
}

export function signInError(error) {
    return {
        type: SIGN_IN_ERROR,
        payload: error.message
    };
}

export function signInSuccess(user) {
    const path = '/dashboard';
    browserHistory.push(path)

    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    };
}
