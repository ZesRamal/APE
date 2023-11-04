/*Edit Profile page*/
import { useAuthState } from "react-firebase-hooks/auth";
import SectionTitles from "../../components/sectionTitles";
import NavBar from "../../navbar/navbar";
import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc, collection, onSnapshot, arrayUnion } from "firebase/firestore";
import { db, initFirebase } from "@/firebase/firebaseApp";
import { useRouter } from 'next/router';

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

const editProfile = () => {
    initFirebase();
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter()


    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [interest, setInterest] = useState('')

    useEffect(() => {
        ; (async () => {
            if (user) {
                const docSnap = await getDoc(doc(db, 'usuarios', user.uid))
                if (docSnap.exists()) {
                    const data = docSnap.data()
                    data.id = docSnap.id
                    console.log(data);
                    setUsername(data.name)
                    setBio(data.bio)
                    setInterest(data.interests)
                    return data
                }
            }
        })()
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await changeUserInfo(user.uid, username, bio, interest, user.email);
        if (added) {
            setUsername("");
            setBio("");
            setInterest("");

            alert("User data added")
        }

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
                <div className="flex flex-col mx-4 my-4">
                    <div>
                        <h1 className="text-[24px] sm:text-[28px] leading-5 font-semibold my-4"> Editar Perfil </h1>
                    </div>
                    <SectionTitles>Nombre de usuario:</SectionTitles>
                    <input
                        className="input-bordered text-[16px] sm:text-[24px] solid border-2 p-3 w-full"
                        type="text"
                        placeholder="Nombre de Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <SectionTitles>Bio:</SectionTitles>
                    <textarea
                        className="textarea-bordered border-2 solid p-3 text-[16px] sm:text-[24px]"
                        type="text"
                        placeholder="Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <SectionTitles>Intereses: </SectionTitles>
                    <input
                        className="input-bordered border-2 solid p-3 w-full text-[16px] sm:text-[24px]"
                        type="text"
                        placeholder="Intereses"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                    />
                    <button className="button-blue" onClick={handleSubmit}>Guardar</button>

                </div>
            )}
        </div>
    )
}

export default editProfile;