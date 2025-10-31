import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX5CS6I6of67DS2zC51obpO7-MvR2gxz0",
  authDomain: "samezz-3f3a9.firebaseapp.com",
  projectId: "samezz-3f3a9",
  storageBucket: "samezz-3f3a9.firebasestorage.app",
  messagingSenderId: "708285207203",
  appId: "1:708285207203:web:4d9eb5422d83db57412516",
  measurementId: "G-X5CH8TFKVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
