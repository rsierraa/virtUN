import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBX3QhoKH4_A2Gq7-aeOxa-5-KUrM8xljk",
  authDomain: "virtun-5bd7d.firebaseapp.com",
  projectId: "virtun-5bd7d",
  storageBucket: "virtun-5bd7d.appspot.com",
  messagingSenderId: "290201366393",
  appId: "1:290201366393:web:e9ca1b030ee937754609a8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;