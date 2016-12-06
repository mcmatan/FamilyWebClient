import {firebaseApp} from '../firebase/firebase';
const firebaseDb = firebaseApp.database();

class DataBase {
    user = null;
    ref = {};

    getCurrentUser() {
        return this.user
    }

    setUserLoggedIn(user) {
        debugger;
        this.ref = firebaseDb.ref(user.id);
        firebaseDb.ref(user.id).child("isLoggedIn").set(true);
    }

    setUserLoggedOut() {
        debugger;
        const userId = this.ref.key;
    }
}

export const dataBaseShared = new DataBase();