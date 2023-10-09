// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1DrlGgYHzI6B_5I02jeLtQ0wPYIyjlBc",
  authDomain: "cultural-event-management.firebaseapp.com",
  projectId: "cultural-event-management",
  storageBucket: "cultural-event-management.appspot.com",
  messagingSenderId: "254436610882",
  appId: "1:254436610882:web:e48cadf8f0eca4ab38eedb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;