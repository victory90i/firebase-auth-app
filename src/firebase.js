// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1cORUcBc5RW9jVklKWsvG7_jtmD7imvo",
  authDomain: "fir-auth-app-2b04e.firebaseapp.com",
  projectId: "fir-auth-app-2b04e",
  storageBucket: "fir-auth-app-2b04e.firebasestorage.app",
  messagingSenderId: "276767122028",
  appId: "1:276767122028:web:b9f22e15d031a9fcc46e49",
  measurementId: "G-MFF8RTZ29L"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;