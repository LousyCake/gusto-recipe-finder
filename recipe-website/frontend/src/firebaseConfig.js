// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAo2qLTzPr6U9M6k_YoBJuc8PWOSktbXc",
  authDomain: "gusto-2ddfe.firebaseapp.com",
  projectId: "gusto-2ddfe",
  storageBucket: "gusto-2ddfe.appspot.com",
  messagingSenderId: "663432930314",
  appId: "1:663432930314:web:99d69bc7c04be69db6abf3",
  measurementId: "G-0VZKJMLXR6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
