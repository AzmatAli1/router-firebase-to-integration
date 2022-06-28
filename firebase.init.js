// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDepjCcZFlHjO4UDgyyvVRgCdTc285R59Y",
  authDomain: "router-firebase-to-integration.firebaseapp.com",
  projectId: "router-firebase-to-integration",
  storageBucket: "router-firebase-to-integration.appspot.com",
  messagingSenderId: "474842709607",
  appId: "1:474842709607:web:cd2ca27795d6e549cc9ec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;