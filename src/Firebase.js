// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU7eDe4nONuYtzgdbbDwBhw2PVaadKJJI",
  authDomain: "city-hospital-b763b.firebaseapp.com",
  projectId: "city-hospital-b763b",
  storageBucket: "city-hospital-b763b.appspot.com",
  messagingSenderId: "424897918564",
  appId: "1:424897918564:web:9f6ce587a93fdda312d171",
  measurementId: "G-7BYF0G4MXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
