
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDHTKGkECrwIHEkgj1SFyLUlRVKQTk3bMM",
  authDomain: "tiktok---clonejornada.firebaseapp.com",
  projectId: "tiktok---clonejornada",
  storageBucket: "tiktok---clonejornada.appspot.com",
  messagingSenderId: "78158620809",
  appId: "1:78158620809:web:999575b8a7e6c883b83e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;