// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWIG6nq4Kur94GwP4yPQudND0Znv_pNcI",
  authDomain: "imageapp-9067a.firebaseapp.com",
  projectId: "imageapp-9067a",
  storageBucket: "imageapp-9067a.appspot.com",
  messagingSenderId: "598482188807",
  appId: "1:598482188807:web:a99256175e22e10259c8a2",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
