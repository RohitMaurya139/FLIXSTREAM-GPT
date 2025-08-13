// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUwGb-3UCdLDa1fyOHVyz_zz-N821KSsU",
  authDomain: "netflix-gpt-cf75e.firebaseapp.com",
  projectId: "netflix-gpt-cf75e",
  storageBucket: "netflix-gpt-cf75e.firebasestorage.app",
  messagingSenderId: "830026122298",
  appId: "1:830026122298:web:c75dd15e6c3a51c8de2103",
  measurementId: "G-18D8XY0HQ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

