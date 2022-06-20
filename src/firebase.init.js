// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJDne39dpQ5Dk8fnsGduSKNUQ_IceLSx0",
  authDomain: "red-chilly-e225a.firebaseapp.com",
  projectId: "red-chilly-e225a",
  storageBucket: "red-chilly-e225a.appspot.com",
  messagingSenderId: "450510153154",
  appId: "1:450510153154:web:5a74bca197497d552ca25b",
  measurementId: "G-P27C3F3J2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;