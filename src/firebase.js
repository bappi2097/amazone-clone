import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDswyTWBi7OmK5l1GYcPi_00KLKYqwx6Fs",
  authDomain: "clone-e8ee0.firebaseapp.com",
  databaseURL: "https://clone-e8ee0.firebaseio.com",
  projectId: "clone-e8ee0",
  storageBucket: "clone-e8ee0.appspot.com",
  messagingSenderId: "760822464828",
  appId: "1:760822464828:web:11d4acac44535a4cee1e39",
  measurementId: "G-NG62C59MNJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
