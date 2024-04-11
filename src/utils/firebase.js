//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKE4o9bXl3_P4NkQp5Kbn0af-qNfYhB4Q",
  authDomain: "my-movies-gpt-b5303.firebaseapp.com",
  projectId: "my-movies-gpt-b5303",
  storageBucket: "my-movies-gpt-b5303.appspot.com",
  messagingSenderId: "552618892892",
  appId: "1:552618892892:web:a3a319fafb7b4b29a19099",
  measurementId: "G-3CQEEGREXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();