import { getDoc, collection, doc, addDoc, where, getDocs, query, setDoc, deleteDoc, or, orderBy } from "firebase/firestore";
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
        });
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function getEventsOrderedByCreation() {
    try {
        const colRef = collection(db, "eventos");
        const que = query(colRef, orderBy("creationTime", "desc"));
        const results = await getDocs(que);

        const events = [];
        for (const doc of results.docs) {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        events.forEach(element => {
        });
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function createEvent(name, category, startDate, startTime, location, organizer, details, imageURL) {
    try {
        const colRef = collection(db, 'eventos')
        let date = new Date()
        const doc = await addDoc(colRef, {
            name: name,
            category: category,
            startDate: startDate,
            startTime: startTime,
            location: location,
            organizer: organizer,
            details: details,
            creationTime: date,
            image: imageURL,
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
        //console.log(events);
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function searchEventsWithCategory(category) {
    try {
        const colRef = collection(db, "eventos");
        const que = query(colRef, where("category", "==", category));
        const results = await getDocs(que);

        const events = [];
        for (const doc of results.docs) {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        //console.log(events);
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function searchEventsWithDate(date) {
    try {
        const colRef = collection(db, "eventos");
        const que = query(colRef, where("startDate", "==", date));
        const results = await getDocs(que);

        const events = [];
        for (const doc of results.docs) {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        //console.log(events);
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}

export async function searchEventsThatHappensToday() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
        day = "0" + day
    }
    let currentDate = `${year}-${month}-${day}`;
    try {
        const colRef = collection(db, "eventos");
        const que = query(colRef, where("startDate", "==", currentDate));
        const results = await getDocs(que);

        const events = [];
        for (const doc of results.docs) {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        //console.log(events);
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

export async function changeEventInfo(eid, name, category, startDate, startTime, endDate, location, details, imageURL) {
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
            image: imageURL,
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

export async function searchEventsWithName(search) {
    try {
        const colRef = collection(db, "eventos");
        const que = query(colRef, or(where("name", ">=", search.toLowerCase()), where("name", ">=", search.toUpperCase())));
        const results = await getDocs(que);

        const events = [];
        for (const doc of results.docs) {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        //console.log(events);
        return events;
    } catch (error) {
        console.error("Error", error);
    }
}