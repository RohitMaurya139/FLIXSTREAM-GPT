// ==== Import required Firebase SDK functions ====

// Core Firebase initialization
import { initializeApp } from "firebase/app";

// Firebase analytics (optional - collects app usage stats)
import { getAnalytics } from "firebase/analytics";

// Firebase authentication service (for user sign-in/sign-up)
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdJ50sFTIBAHCVwAsmpHmdBSquYSbEWyc",
  authDomain: "flixstream-gtp.firebaseapp.com",
  projectId: "flixstream-gtp",
  storageBucket: "flixstream-gtp.firebasestorage.app",
  messagingSenderId: "193046779463",
  appId: "1:193046779463:web:1976c18026f44eafc60362",
  measurementId: "G-WS6HYGNQT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/**
 * ==== Export Firebase Authentication Instance ====
 * - This exports the `auth` object so it can be used in other files
 * - You'll use it to sign in/out users, register them, etc.
 *
 * Example usage elsewhere:
 *   import { auth } from "./firebase";
 *   signInWithEmailAndPassword(auth, email, password);
 */
export const auth = getAuth();
