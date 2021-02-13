import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDowB4KIvxuYgAqhBrcmHYPYoRs__2LEbQ",
  authDomain: "nippon-clothing.firebaseapp.com",
  projectId: "nippon-clothing",
  storageBucket: "nippon-clothing.appspot.com",
  messagingSenderId: "331646180528",
  appId: "1:331646180528:web:34c7673aeb3b5f0aba2f75",
  measurementId: "G-32TL65THWD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;