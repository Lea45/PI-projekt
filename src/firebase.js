import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-rsJsBDGM01nJB0JYf1a7dlFV0HW8AaI",
    authDomain: "palmero-44b50.firebaseapp.com",
    projectId: "palmero-44b50",
    storageBucket: "palmero-44b50.appspot.com",
    messagingSenderId: "200331618305",
    appId: "1:200331618305:web:02dac037ddf59c029b7800"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default  {
    firebase,
  };