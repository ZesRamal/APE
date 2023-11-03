import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import "firebase/auth"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import "firebase/firestore"

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
};

// Initialize Firebase
export const app = initializeApp(clientCredentials);
export const db = getFirestore(app);

export const initFirebase = () => {
    return app;
}