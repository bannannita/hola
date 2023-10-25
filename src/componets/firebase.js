// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";
import{getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYsuKfRhluC31NmP8kuL6Zjy9LZruJNao",
  authDomain: "hola-47adc.firebaseapp.com",
  projectId: "hola-47adc",
  storageBucket: "hola-47adc.appspot.com",
  messagingSenderId: "915989820485",
  appId: "1:915989820485:web:cfbef36f9326d300f99f2c",
  measurementId: "G-TSJNTYF84H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db  = getFirestore(app);
export const storage = getStorage (app);