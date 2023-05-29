// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH5dEK7PQo-rw2_C9dxbHYy282fQwC4B8",
  authDomain: "twitter-clone-20a42.firebaseapp.com",
  projectId: "twitter-clone-20a42",
  storageBucket: "twitter-clone-20a42.appspot.com",
  messagingSenderId: "53389711928",
  appId: "1:53389711928:web:2fad846423690cab0964cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);