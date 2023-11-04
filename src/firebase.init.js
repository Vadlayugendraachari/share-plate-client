// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvPIALPEbrEItg6E7rwK8isCY7KDzrhGA",
  authDomain: "community-food-sharing-7180e.firebaseapp.com",
  projectId: "community-food-sharing-7180e",
  storageBucket: "community-food-sharing-7180e.appspot.com",
  messagingSenderId: "790757561037",
  appId: "1:790757561037:web:a767e08f12e5f89e8f4f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;