// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuPPgHCxunh8M9Jkmiw4VzpIQO7DYSe1k",
  authDomain: "dictionary-fe4c0.firebaseapp.com",
  projectId: "dictionary-fe4c0",
  storageBucket: "dictionary-fe4c0.appspot.com",
  messagingSenderId: "753018235472",
  appId: "1:753018235472:web:21beeb44bde581e51ebf55",
  measurementId: "G-7MQH33EG91"
};

initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db = getFirestore();