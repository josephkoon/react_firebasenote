import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBnzBbFdCEcBTu-Iy9vDAVi6fZw21wO00s",
    authDomain: "reactfirebase-9abf7.firebaseapp.com",
    databaseURL: "https://reactfirebase-9abf7.firebaseio.com",
    projectId: "reactfirebase-9abf7",
    storageBucket: "reactfirebase-9abf7.appspot.com",
    messagingSenderId: "130435961487"
  };
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');
