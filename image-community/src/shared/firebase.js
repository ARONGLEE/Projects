import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYLW7ybyeWtmHSuM6y81A_Bp05lsx4vzI",
  authDomain: "image-comm-a4ad6.firebaseapp.com",
  projectId: "image-comm-a4ad6",
  storageBucket: "image-comm-a4ad6.appspot.com",
  messagingSenderId: "84012032395",
  appId: "1:84012032395:web:5fbca89f40d8ae04ebcf8e",
  measurementId: "G-X879F0Z9XN",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
