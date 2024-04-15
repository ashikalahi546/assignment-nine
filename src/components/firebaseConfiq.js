// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsANcU44zieghIYdVJHnslBPcfZaBc6FM",
  authDomain: "assignment-nine-e5725.firebaseapp.com",
  projectId: "assignment-nine-e5725",
  storageBucket: "assignment-nine-e5725.appspot.com",
  messagingSenderId: "673090092727",
  appId: "1:673090092727:web:e6c528a378f203fdcdd732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 export default auth;

