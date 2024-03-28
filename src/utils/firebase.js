// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmbJuSFHnjTAmi9EQ-lTjJHal7tkrkoBI",
  authDomain: "movies-gpt-e153e.firebaseapp.com",
  projectId: "movies-gpt-e153e",
  storageBucket: "movies-gpt-e153e.appspot.com",
  messagingSenderId: "41151741051",
  appId: "1:41151741051:web:c3a1b29c39397ec4d676de",
  measurementId: "G-KCQT8GLLT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);