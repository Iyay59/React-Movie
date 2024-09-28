// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnNTEDmQ6fxEvnQIQxTPY7PoKlFTJS30M",
  authDomain: "movies-app-b43a7.firebaseapp.com",
  projectId: "movies-app-b43a7",
  storageBucket: "movies-app-b43a7.appspot.com",
  messagingSenderId: "703967559530",
  appId: "1:703967559530:web:4a85a333160138e63aef13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);