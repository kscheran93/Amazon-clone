// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATTpLz0dQQayTn-OTdO0FwfI2pEOS0Jgc",
    authDomain: "clone-app-558ab.firebaseapp.com",
    projectId: "clone-app-558ab",
    storageBucket: "clone-app-558ab.appspot.com",
    messagingSenderId: "20585969219",
    appId: "1:20585969219:web:e7e8378c2c591992e306f6",
    measurementId: "G-TL5Q8RGX92"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };