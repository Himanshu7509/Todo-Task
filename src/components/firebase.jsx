// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzHxxFg0iT0fSlEAkXOSLbDQVEoMOFfJs",
  authDomain: "todo-list-71f38.firebaseapp.com",
  projectId: "todo-list-71f38",
  storageBucket: "todo-list-71f38.firebasestorage.app",
  messagingSenderId: "239527679827",
  appId: "1:239527679827:web:9dbbb815f634ead8e9b3a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}