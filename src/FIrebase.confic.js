// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdMjoNTjvdQKQOd3YE_17EQ0ncbB13F_Q",
  authDomain: "test-firebase-nikita.firebaseapp.com",
  projectId: "test-firebase-nikita",
  storageBucket: "test-firebase-nikita.appspot.com",
  messagingSenderId: "422597605469",
  appId: "1:422597605469:web:7c1ecb48f05b7937e475b4",
  measurementId: "G-V1KZZ42W74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app