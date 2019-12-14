import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAyLQBfL0VzBXaYUCahiM1s0fOGDFFbZDM",
  authDomain: "ca-frontend-challenge.firebaseapp.com",
  databaseURL: "https://ca-frontend-challenge.firebaseio.com",
  projectId: "ca-frontend-challenge",
  storageBucket: "ca-frontend-challenge.appspot.com",
  messagingSenderId: "758428312769",
  appId: "1:758428312769:web:56eee29ec82a6969eda040",
  measurementId: "G-8SM5176ZP0"
}

firebase.initializeApp(config);

export const db = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
