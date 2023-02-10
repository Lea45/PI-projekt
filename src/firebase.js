import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

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