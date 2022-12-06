// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWnJa1qr2HnhGJ_tDVm2zTsOsSAhHt0l0",
    authDomain: "lssei-710b1.firebaseapp.com",
    databaseURL: "https://lssei-710b1-default-rtdb.firebaseio.com",
    projectId: "lssei-710b1",
    storageBucket: "lssei-710b1.appspot.com",
    messagingSenderId: "424843453707",
    appId: "1:424843453707:web:a9bce0664fee81d51eee0e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase;