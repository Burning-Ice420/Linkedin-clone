import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD7KBUqJ1V1NYwMPccS6NrP1FwTdgfvVM0",
  authDomain: "linkedin-clone-39492.firebaseapp.com",
  projectId: "linkedin-clone-39492",
  storageBucket: "linkedin-clone-39492.appspot.com",
  messagingSenderId: "791026693866",
  appId: "1:791026693866:web:f44cc3db083c8f13298993",
  measurementId: "G-96LN2QRX4E",
};

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// Export Firebase services
export { auth, provider, storage };
export default db;
