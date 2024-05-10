// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYKEkRoLf276O27vOIql08Swe6eczJD10",
  authDomain: "it-sysarch32-store-villa-bbf4d.firebaseapp.com",
  projectId: "it-sysarch32-store-villa-bbf4d",
  storageBucket: "it-sysarch32-store-villa-bbf4d.appspot.com",
  messagingSenderId: "612015371225",
  appId: "1:612015371225:web:41bd61724db8b24d951fc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//thats our default export that weve done here
export default getFirestore();
