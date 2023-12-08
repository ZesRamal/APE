/*View Profile page*/
import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initFirebase } from '@/firebase/firebaseApp'
import { useRouter } from 'next/router';
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseApp";
import SectionTitles from "@/src/pages/components/sectionTitles";
import { getUser } from "../api/user";
import { searchEventsWithUID } from "../api/events";


const viewProfile = () => {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [interest, setInterest] = useState('')
    const [createdEvents, setCreatedEvents] = useState()
    const router = useRouter()
    const {
        query: { uid },
    } = router;

    useEffect(() => {
        ; (async () => {
            if (!uid) return false;
            const user = await getUser(uid)
            if (!user) {
                router.push('/profile')
            } else {
                const eventos = await searchEventsWithUID(uid)
                setUsername(user.name)
                setBio(user.bio)
                setInterest(user.interests)
                setCreatedEvents(eventos)
            }
        })()
    }, [uid])

    function goToEdit() {
        router.replace("/profile/edit/" + uid);
    }

    // useEffect(() => {
    //     if (!user && !loading) {
    //         router.push("/")
    //     }
    // }, [loading]);

    return (
        <div className="box-border">
            <NavBar />
            <div className="flex flex-col mx-4 my-4">
                <div>
                    <h1 className="text-[24px] sm:text-[28px] leading-5 font-semibold my-4"> Ver Perfil </h1>
                </div>
                <SectionTitles>Nombre de usuario:</SectionTitles>
                <SectionTitles className="input-bordered border-2 solid p-3 w-full text-[16px] sm:text-[24px]">{username}</SectionTitles>
                <SectionTitles>Bio:</SectionTitles>
                <SectionTitles className="input-bordered border-2 solid p-3 w-full text-[16px] sm:text-[24px]">{bio}</SectionTitles>
                <SectionTitles>Intereses: </SectionTitles>
                <SectionTitles className="input-bordered border-2 solid p-3 w-full text-[16px] sm:text-[24px]">{interest}</SectionTitles>
                <SectionTitles>Eventos Creados: </SectionTitles>
                {createdEvents?.map((event) => (
                    <SectionTitles
                        key={event.id}
                        children={event.name}
                    />
                ))}
                <SectionTitles>Eventos Inscritos: </SectionTitles>
                <SectionTitles className="input-bordered border-2 solid p-3 w-full text-[16px] sm:text-[24px]"></SectionTitles>
            </div>
        </div>
    )
}

export default viewProfile;