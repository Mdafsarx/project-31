// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE6bDhrTjhKq57tiNkGneNhehZmcUU9Is",
  authDomain: "project-31-b9660.firebaseapp.com",
  projectId: "project-31-b9660",
  storageBucket: "project-31-b9660.appspot.com",
  messagingSenderId: "779035859871",
  appId: "1:779035859871:web:ab5731464aa372e9403baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth 