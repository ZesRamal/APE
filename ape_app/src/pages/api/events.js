import { getDoc, collection, doc, addDoc, where, getDocs, query, setDoc, deleteDoc } from "firebase/firestore";
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

export async function createEvent(name, category, startDate, startTime, endDate, location, organizer, details) {
    try {
        const colRef = collection(db, 'eventos')
        const doc = await addDoc(colRef, {
            name: name,
            category: category,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            location: location,
            organizer: organizer,
            details: details,
        }, { merge: true });
        console.log("Event Added with ID:", doc.id);
        return doc;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function searchEventsWithUID(uid) {
    try {
        const colRef = collection(db, "eventos");
        const que = query(colRef, where("organizer", "==", uid));
        const results = await getDocs(que);

        const events = [];
        for (const doc of results.docs) {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        console.log(events);
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function getEvent(eid) {
    try {
        const docRef = doc(db, "eventos/" + eid);
        const results = await getDoc(docRef);
        if (results.exists()) {
            const event = results.data();
            event.id = eid
            console.log(event);
            return event;
        } else {
            return false
        }
    } catch (error) {
        console.error("Error", error);
    }
}

export async function changeEventInfo(eid, name, category, startDate, startTime, endDate, location, details) {
    try {
        const docRef = doc(db, 'eventos', eid)
        await setDoc(docRef, {
            name: name,
            category: category,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            location: location,
            details: details,
        }, { merge: true });
        console.log("Event modified, id:", eid);
    } catch (error) {
        console.error("Error", error);
    }
}

export async function deleteEvent(eid) {
    try {
        const docRef = doc(db, 'eventos', eid)
        await deleteDoc(docRef);
        console.log("Event deleted with id:", eid);
    } catch (error) {
        console.error("Error", error);
    }
}