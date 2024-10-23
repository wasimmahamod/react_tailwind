// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ajNXj8yKuR7MVyZjRc0VUgCLA6LX2Qk",
  authDomain: "todo-5f816.firebaseapp.com",
  databaseURL: "https://todo-5f816-default-rtdb.firebaseio.com",
  projectId: "todo-5f816",
  storageBucket: "todo-5f816.appspot.com",
  messagingSenderId: "670293316033",
  appId: "1:670293316033:web:1e42eff21ab25677e4df40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig