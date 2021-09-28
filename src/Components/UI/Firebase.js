// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnEpjTrTPIRr7NXoRO--cSYVxE4jdQsfA",
  authDomain: "xpick-86008.firebaseapp.com",
  projectId: "xpick-86008",
  storageBucket: "xpick-86008.appspot.com",
  messagingSenderId: "912531295236",
  appId: "1:912531295236:web:017cb2eb5230730936b951",
  measurementId: "G-6PYCWZNYD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();