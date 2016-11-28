import {firebaseAuth} from "../../core/firebase";
import {SIGN_IN_ERROR, SIGN_IN_SUCCESS} from "./ActionTypes";

export function login(values) {
    const email = values.username;
    const password = values.password;
    return dispatch => {
        firebaseAuth.signInWithEmailAndPassword(email, password).then(function(user) {
            dispatch(signInSuccess(user));
        }).catch(function(error) {
            dispatch(signInError(error));
        });
    };
}

export function signInError(error) {
    return {
        type: SIGN_IN_ERROR,
        payload: error
    };
}

export function signInSuccess(user) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    };
}
