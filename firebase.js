import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD4NcQHudp-eltTJkvB0RJ5CLt5Wu9Exbc",
  authDomain: "whatsapp-6233e.firebaseapp.com",
  projectId: "whatsapp-6233e",
  storageBucket: "whatsapp-6233e.appspot.com",
  messagingSenderId: "658122567688",
  appId: "1:658122567688:web:d1d80586d864f8d1f761bd"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const firebaseProvider = new firebase.auth.GoogleAuthProvider()

export { db, auth, firebaseProvider }