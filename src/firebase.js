import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
    apiKey: "AIzaSyCaar8bWWi7zKtJ7YJjVoYnNuspAIqRpdw",
    authDomain: "ctcourseeval.firebaseapp.com",
    projectId: "ctcourseeval",
    storageBucket: "ctcourseeval.appspot.com",
    messagingSenderId: "779057700421",
    appId: "1:779057700421:web:e539a61d67dba2c8888d2c",
    measurementId: "G-DK02R7ML22"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);

export {auth}
export {db}
export {perf}