
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyB7x1wP0NYxzZQ802OK7ASyaaDRP17hzqw",
  authDomain: "react-website-f2351.firebaseapp.com",
  projectId: "react-website-f2351",
  storageBucket: "react-website-f2351.appspot.com",
  messagingSenderId: "192151613976",
  appId: "1:192151613976:web:5a2eec4202d22c50aa896d",
  measurementId: "G-GTH2BK3XER"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);