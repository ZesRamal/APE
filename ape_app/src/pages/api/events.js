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
            //console.log(event);
            return event;
        } else {
            return false
        }
    } catch (error) {
        console.error("Error", error);
    }
}

export async function changeEventInfo(eid, name, category, startDate, startTime, location, details, imageURL) {
    try {
        const docRef = doc(db, 'eventos', eid)
        await setDoc(docRef, {
            name: name,
            category: category,
            startDate: startDate,
            startTime: startTime,
            location: location,
            details: details,
            image: imageURL,
        }, { merge: true });
        //console.log("Event modified, id:", eid);
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

export async function registerUserToEvent(eventId, userId) {
    try {
        const eventRef = doc(db, "eventos", eventId);

        // Get existing attendees data
        const eventDoc = await getDoc(eventRef);
        let attendees = eventDoc.data().attendees || [];

        // Check if user already registered
        if (attendees.includes(userId)) {
            throw new Error("User already registered to this event.");
        }

        // Add user ID to attendees array
        attendees.push(userId);

        // Update event data with updated attendees list
        await setDoc(eventRef, { attendees }, { merge: true });

        console.log("User registered to event successfully.");
    } catch (error) {
        console.error("Error registering user to event:", error);
    }
}

export async function getEventsWithUserRegistered(userId) {
    try {
        const colRef = collection(db, "eventos");
        const eventsWithUser = [];

        // Loop through all events
        const querySnapshot = await getDocs(colRef);
        for (const doc of querySnapshot.docs) {
            const eventData = doc.data();
            const attendees = eventData.attendees || [];

            // Check if user is registered for this event
            if (attendees.includes(userId)) {
                eventsWithUser.push({
                    id: doc.id,
                    ...eventData,
                });
            }
        }

        return eventsWithUser;
    } catch (error) {
        console.error("Error getting events with user:", error);
    }
}

export async function isUserRegisteredToEvent(eventId, userId) {
    try {
        const eventRef = doc(db, "eventos", eventId);

        // Get event data
        const eventDoc = await getDoc(eventRef);
        const attendees = eventDoc.data().attendees || [];

        // Check if user is registered
        return attendees.includes(userId);
    } catch (error) {
        console.error("Error checking if user is registered:", error);
        return false; // Assume not registered on error
    }
}

export async function unregisterUserFromEvent(eventId, userId) {
    try {
        const eventRef = doc(db, "eventos", eventId);

        // Get existing attendees data
        const eventDoc = await getDoc(eventRef);
        let attendees = eventDoc.data().attendees || [];

        // Check if user is registered
        if (!attendees.includes(userId)) {
            throw new Error("User is not registered to this event.");
        }

        // Remove user ID from attendees array
        attendees = attendees.filter((attendee) => attendee !== userId);

        // Update event data with updated attendees list
        await setDoc(eventRef, { attendees }, { merge: true });

        console.log("User unregistered from event successfully.");
    } catch (error) {
        console.error("Error unregistering user from event:", error);
    }
}

export async function getEventAttendees(eventId) {
    try {
        const eventRef = doc(db, "eventos", eventId);

        // Get event data
        const eventDoc = await getDoc(eventRef);

        // Check if event data exists
        if (!eventDoc.exists()) {
            throw new Error("Event with provided ID does not exist.");
        }

        // Extract attendees
        const attendees = eventDoc.data().attendees || [];

        return attendees;
    } catch (error) {
        console.error("Error getting event attendees:", error);
        return []; // Assume empty list on error
    }
}

export async function getEventAttendeeNames(eventId) {
    try {
        const eventRef = doc(db, "eventos", eventId);

        // Get event data
        const eventDoc = await getDoc(eventRef);

        // Check event exists and has attendees
        if (!eventDoc.exists() || !eventDoc.data().attendees) {
            throw new Error("Event with provided ID does not exist or has no attendees.");
        }

        // Get attendees IDs
        const attendeeIds = eventDoc.data().attendees;

        // Create an array to store attendee names
        const attendeeNames = [];

        // Loop through each attendee ID and fetch user document
        for (const attendeeId of attendeeIds) {
            const userRef = doc(db, "usuarios", attendeeId);
            const userDoc = await getDoc(userRef);
            //console.log(userDoc.data().name);

            // Check if user exists and extract name from doc ID
            if (userDoc.exists()) {
                attendeeNames.push(userDoc.data().name);
            } else {
                console.warn(`Unable to find username for attendee: ${attendeeId}`);
            }
        }

        return attendeeNames;
    } catch (error) {
        console.error("Error getting event attendee names:", error);
        return [];
    }
}
