// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqiszeeNp45GEcITMkQysxb7OvRmE5GJg",
  authDomain: "movies-gpt-2a4e6.firebaseapp.com",
  projectId: "movies-gpt-2a4e6",
  storageBucket: "movies-gpt-2a4e6.appspot.com",
  messagingSenderId: "920330217229",
  appId: "1:920330217229:web:bdbb3362b77d2e09967244",
  measurementId: "G-5TPZPLXRLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();