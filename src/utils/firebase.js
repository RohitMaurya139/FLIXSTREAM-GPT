
import { initializeApp } from "firebase/app";

// Firebase analytics (optional - collects app usage stats)
import { getAnalytics } from "firebase/analytics";

// Firebase authentication service (for user sign-in/sign-up)
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "flixstream-gtp.firebaseapp.com",
  projectId: "flixstream-gtp",
  storageBucket: "flixstream-gtp.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: "G-WS6HYGNQT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
