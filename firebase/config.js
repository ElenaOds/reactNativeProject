import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkxGDR41_IejXG0WPnwjSM9Dgh1XJDvc0",
    authDomain: "reactnativeproject-3adf4.firebaseapp.com",
    projectId: "reactnativeproject-3adf4",
    storageBucket: "reactnativeproject-3adf4.appspot.com",
    messagingSenderId: "891908768501",
    appId: "1:891908768501:web:b64fbb9d37efe810cebbbc"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export const db = getFirestore(app);