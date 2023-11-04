/*View Profile page*/
import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initFirebase } from '@/firebase/firebaseApp'
import { useRouter } from 'next/router';
import { setDoc, collection, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseApp";


const viewProfile = () => {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter()

    function goToEdit() {
        router.replace("/profile/edit");
    }

    useEffect(() => {
        if (!user && !loading) {
            router.push("/")
        }
    }, [loading]);

    return (
        <div className="box-border">
            <NavBar />
            {user && (
                <div>
                    <div onClick={goToEdit}>Edit</div>
                </div>
            )}
        </div>
    )
}

export default viewProfile;