import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {initializeApp} from "firebase";

const config = {
  apiKey: "AIzaSyDnXjwtviCjPrzQ51cArxA5Nwj9ClfW4dA",
  authDomain: "crwn-db-93e27.firebaseapp.com",
  databaseURL: "https://crwn-db-93e27.firebaseio.com",
  projectId: "crwn-db-93e27",
  storageBucket: "crwn-db-93e27.appspot.com",
  messagingSenderId: "907786506217",
  appId: "1:907786506217:web:9e0659ddaf780993e44578",
  measurementId: "G-NHVCDSK7K6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;