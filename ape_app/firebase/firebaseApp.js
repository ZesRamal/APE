// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGlltKzRlTml8pxYh0ahDdDUb_IJCVSRA",
    authDomain: "eventec-97149.firebaseapp.com",
    databaseURL: "https://eventec-97149-default-rtdb.firebaseio.com",
    projectId: "eventec-97149",
    storageBucket: "eventec-97149.appspot.com",
    messagingSenderId: "844249826849",
    appId: "1:844249826849:web:3853740700c5787d318560"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}