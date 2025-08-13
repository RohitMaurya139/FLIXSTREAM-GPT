// ==== Import required Firebase SDK functions ====

// Core Firebase initialization
import { initializeApp } from "firebase/app";

// Firebase analytics (optional - collects app usage stats)
import { getAnalytics } from "firebase/analytics";

// Firebase authentication service (for user sign-in/sign-up)
import { getAuth } from "firebase/auth";

/**
 * TODO: Import other Firebase services here if you need them in the future:
 * Example:
 *   import { getFirestore } from "firebase/firestore"; // Cloud Firestore DB
 *   import { getStorage } from "firebase/storage";      // Cloud Storage
 */

// ==== Firebase Configuration ====
// This object contains credentials and settings for your Firebase project.
// You get these values from the Firebase console (Project Settings → General)
const firebaseConfig = {
  apiKey: "AIzaSyAUwGb-3UCdLDa1fyOHVyz_zz-N821KSsU", // Auth/API purpose
  authDomain: "netflix-gpt-cf75e.firebaseapp.com", // Domain for hosted auth/page
  projectId: "netflix-gpt-cf75e", // Unique project identifier
  storageBucket: "netflix-gpt-cf75e.firebasestorage.app", // Cloud Storage bucket
  messagingSenderId: "830026122298", // For Firebase Cloud Messaging
  appId: "1:830026122298:web:c75dd15e6c3a51c8de2103", // Firebase App ID
  measurementId: "G-18D8XY0HQ2", // Analytics ID (optional)
};

/**
 * ==== Initialize Firebase App ====
 * - This creates and configures a Firebase App instance using your `firebaseConfig`
 * - You must call this before using ANY Firebase services (Auth, Firestore, etc.)
 */
const app = initializeApp(firebaseConfig);

/**
 * ==== Set Up Analytics (Optional) ====
 * - Logs performance and usage metrics for the app
 * - Only works when the app is deployed on a server, not locally in dev mode
 */
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
