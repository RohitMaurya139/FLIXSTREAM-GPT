
import { initializeApp } from "firebase/app";

// Firebase analytics (optional - collects app usage stats)
import { getAnalytics } from "firebase/analytics";

// Firebase authentication service (for user sign-in/sign-up)
import { getAuth } from "firebase/auth";


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

export const auth = getAuth();
