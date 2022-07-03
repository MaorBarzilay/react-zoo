// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIuF5xBE4L_hnhrowkpc8VUkfmhscu85U",
  authDomain: "way-of-life-e78c5.firebaseapp.com",
  projectId: "way-of-life-e78c5",
  storageBucket: "way-of-life-e78c5.appspot.com",
  messagingSenderId: "37647581668",
  appId: "1:37647581668:web:8316f09421f1eda504c7f1",
  measurementId: "G-PTH000B39J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);