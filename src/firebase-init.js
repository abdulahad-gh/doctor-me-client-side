// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClu211w47E5QxM4m5ZmbCg46K6jg7loFo",
    authDomain: "doctor-me-9094b.firebaseapp.com",
    projectId: "doctor-me-9094b",
    storageBucket: "doctor-me-9094b.appspot.com",
    messagingSenderId: "984364908997",
    appId: "1:984364908997:web:a4312de6d5b40be20c8bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth