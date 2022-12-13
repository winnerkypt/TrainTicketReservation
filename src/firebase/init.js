// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore" ;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClEkMxmTQLiIoTSTWJECyD3_Voj-G0dlk",
  authDomain: "trainticketreservation-3d28c.firebaseapp.com",
  projectId: "trainticketreservation-3d28c",
  storageBucket: "trainticketreservation-3d28c.appspot.com",
  messagingSenderId: "1067709857166",
  appId: "1:1067709857166:web:fb136047185a83a92d38df",
  measurementId: "G-91EHNHQ082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init firestore service
const db = getFirestore()

export default db 