import {firebaseApp} from "../firebase/firebase";
import React, {Component} from "react";
import {loadState} from "../actions/DataBaseActions";
const firebaseDb = firebaseApp.database();

class DataBase extends Component {
    ref = null;

    isLoggedIn() {
        return localStorage.loggedIn
    }

    setUserLoggedIn(user) {
        localStorage.loggedIn = true;
        this.ref = firebaseDb.ref(user.uid);
        firebaseDb.ref("users/" + user.uid).child("isLoggedIn").set(true);
    }

    setUserLoggedOut() {
        localStorage.loggedIn = false;
        localStorage.clear();
    }

}

export const dataBaseShared = new DataBase();