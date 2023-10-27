/*View Profile page*/
import React from "react";
import NavBar from "../navbar/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initFirebase } from '@/firebase/firebaseApp'

const viewProfile = () => {
    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    return (
        <div className="box-border">
            <NavBar />
        </div>
    )
}

export default viewProfile;