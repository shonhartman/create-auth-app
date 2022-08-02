import { initializeApp } from "firebase/app";
​​import {
​​  GoogleAuthProvider,
​​  getAuth,
​​  signInWithPopup,
​​  signInWithEmailAndPassword,
​​  createUserWithEmailAndPassword,
​​  sendPasswordResetEmail,
​​  signOut,
​​} from "firebase/auth";
​​import {
​​  getFirestore,
​​  query,
​​  getDocs,
​​  collection,
​​  where,
​​  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEj5UTo096qH7bJXHX1XnzSYcNYCyIYG0",
  authDomain: "fsf-test-app.firebaseapp.com",
  projectId: "fsf-test-app",
  storageBucket: "fsf-test-app.appspot.com",
  messagingSenderId: "1068056562999",
  appId: "1:1068056562999:web:01fee22156176917d6deb2",
  measurementId: "G-3WFKHBRE2N"
};

// Initialize Firebase
const app = ​​initializeApp(firebaseConfig);
​​const auth = getAuth(app);
​​const db = getFirestore(app);