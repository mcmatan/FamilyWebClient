import {firebaseApp} from '../firebase/firebase';
const firebaseDb = firebaseApp.database();

class DataBase {
    ref = {};

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
    }
}

export const dataBaseShared = new DataBase();