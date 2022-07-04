// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firestore
import { getFirestore } from "firebase/firestore";
// settings
const firebaseConfig = {
  apiKey: "AIzaSyAStcchbYg1ttKmQAPIgpvBQ7-TcSuAb2o",
  authDomain: "react-final-e2717.firebaseapp.com",
  projectId: "react-final-e2717",
  storageBucket: "react-final-e2717.appspot.com",
  messagingSenderId: "1052043912014",
  appId: "1:1052043912014:web:30d6247ca608291f32f41f",
  measurementId: "G-ECR0H3XDSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// wrap the app with firestore
const db = getFirestore(app);
// export
export { db };
