import { collection, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseApp";

export async function getUsers() {
    try {
        const colRef = collection(db, "usuarios");
        const results = await getDocs(colRef);

        const users = [];
        for (const doc of results.docs) {
            users.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        console.log(users);
        return users;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function getUser(uid) {
    try {
        const docRef = doc(db, "usuarios/" + uid);
        const results = await getDoc(docRef);
        if (results.exists()) {
            const user = results.data();
            user.id = uid
            console.log(user);
            return user;
        } else {
            return false
        }
    } catch (error) {
        console.error("Error", error);
    }
}

export async function changeUserInfo(uid, name, bio, interests, email) {
    try {
        const docRef = doc(db, 'usuarios', uid)
        await setDoc(docRef, {
            email: email,
            name: name,
            bio: bio,
            interests: interests,
            //createdEvents: arrayUnion(1111)
        }, { merge: true });
        console.log("User Added with ID:", uid);
    } catch (error) {
        console.error("Error", error);
    }
}