// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAQUPqNbFAgaNPfitz_zLTAVPxhCzgFOz0",
  authDomain: "easycampers-72c30.firebaseapp.com",
  projectId: "easycampers-72c30",
  storageBucket: "easycampers-72c30.appspot.com",
  messagingSenderId: "100361307398",
  appId: "1:100361307398:web:034b4ab8d5b0ef4c12ca87",
  measurementId: "G-6P4CQ2T1E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app)

