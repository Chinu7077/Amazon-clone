// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBrWZNrFGnpoyVHn98e73kPuRUKW6HvzNQ",
    authDomain: "fir-52e63.firebaseapp.com",
    projectId: "fir-52e63",
    storageBucket: "fir-52e63.appspot.com",
    messagingSenderId: "818975201183",
    appId: "1:818975201183:web:bef5d9f1c2e1c98489cfaa",
    measurementId: "G-G176HBJ1TN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  
  export { db, auth};