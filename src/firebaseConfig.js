import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDLCRZth5fwP6X-wm_NwBruc-HmtWVGyrs",
  authDomain: "password-manager-a80bf.firebaseapp.com",
  projectId: "password-manager-a80bf",
  storageBucket: "password-manager-a80bf.appspot.com",
  messagingSenderId: "972669230676",
  appId: "1:972669230676:web:e42718add713df09ead7c1",
  measurementId: "G-PRLJ8T8QZ9"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);