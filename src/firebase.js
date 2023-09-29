import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCftm7jcj1sN9RWZZ3Z7c6uNacKAv8gbOw",
    authDomain: "portfolio-app-65db7.firebaseapp.com",
    projectId: "portfolio-app-65db7",
    storageBucket: "portfolio-app-65db7.appspot.com",
    messagingSenderId: "7653637407",
    appId: "1:7653637407:web:318a3117075f0e8cd8042a",
    measurementId: "G-XNL3SG8MMZ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);