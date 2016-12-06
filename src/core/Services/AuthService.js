import {firebaseApp} from '../firebase/firebase';
import {signInSuccess, signInError, loginSubmit, signInSuccessAndRoute} from "../actions/AuthActions";
import {dataBaseShared} from "./DataBase";
const firebaseAuth = firebaseApp.auth();

class AuthService {
    getCurrentUser() {
        return null
    }

    startAuthListener() {
        return dispatch => {
            firebaseAuth.onAuthStateChanged(function (user) {
                if (user) {
                    dataBaseShared.setUserLoggedIn(user);
                    dispatch(signInSuccess(user))
                } else {
                    dataBaseShared.setUserLoggedOut();
                    dispatch(signInError({message: ""}))
                }
            })
        };
    }

    login(values) {
        const email = values.username;
        const password = values.password;
        return dispatch => {
            dispatch(loginSubmit());
            firebaseAuth.signInWithEmailAndPassword(email, password).then(function (user) {
                dispatch(signInSuccessAndRoute(user));
            }).catch(function (error) {
                dispatch(signInError(error));
            });
        };
    }
}

export const authServiceShared = new AuthService();