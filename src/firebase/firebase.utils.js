import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyCo1G1HGa0Yrjc-Qr2X7pTj7bL3b1T0AeE",
    authDomain: "crown-store-f4b00.firebaseapp.com",
    projectId: "crown-store-f4b00",
    storageBucket: "crown-store-f4b00.appspot.com",
    messagingSenderId: "446051625182",
    appId: "1:446051625182:web:3cfdf3281f0584ef4afa4f",
    measurementId: "G-SYTX36SN6Z"
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;