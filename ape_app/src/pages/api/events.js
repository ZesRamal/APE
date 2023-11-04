import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, collection, doc, Firestore, arrayUnion, addDoc, where, getDocs, query } from "firebase/firestore";
import { db, initFirebase } from "@/firebase/firebaseApp";

export async function getEvents() {
    try {
        const colRef = collection(db, "eventos");
        const results = await getDocs(colRef);

        const events = [];
        for (const doc of results.docs) {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        events.forEach(element => {
            //console.log(element.id);
        });
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}