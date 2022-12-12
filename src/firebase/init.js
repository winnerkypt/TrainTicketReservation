// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGnodYY7eIRnE7PvKCPhcUK8bj_r70ZAo",
  authDomain: "int305fb003.firebaseapp.com",
  projectId: "int305fb003",
  storageBucket: "int305fb003.appspot.com",
  messagingSenderId: "39296552591",
  appId: "1:39296552591:web:1b4f325a650d36b3b76afa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db
