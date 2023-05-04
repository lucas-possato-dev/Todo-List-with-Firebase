// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALzL0i9B8tLwKyfL6kF-_cxMf0ZkivHB8",
  authDomain: "todo-app-b8934.firebaseapp.com",
  projectId: "todo-app-b8934",
  storageBucket: "todo-app-b8934.appspot.com",
  messagingSenderId: "402121208752",
  appId: "1:402121208752:web:d363a2195ad2d09dfc1c75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
