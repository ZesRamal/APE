/*Edit Profile page*/
import { useAuthState } from "react-firebase-hooks/auth";
import SectionTitles from "../../components/sectionTitles";
import NavBar from "../../navbar/navbar";
import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc, collection, onSnapshot, arrayUnion } from "firebase/firestore";
import { db, initFirebase } from "@/firebase/firebaseApp";
import { useRouter } from 'next/router';
import { getUser, changeUserInfo } from "../../api/user";

const editProfile = () => {
    initFirebase();
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter()
    const {
        query: { uid },
    } = router;

    const [userID, setUserID] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [interest, setInterest] = useState('')

    useEffect(() => {
        ; (async () => {
            if (!uid) return false;
            const user = await getUser(uid)
            if (!user) {
                router.push('/profile')
            } else {
                setUserID(user.id)
                setUsername(user.name)
                setBio(user.bio)
                setInterest(user.interests)
            }
        })()
    }, [uid])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await changeUserInfo(user.uid, username, bio, interest, user.email);
        if (added) {
            setUsername("");
            setBio("");
            setInterest("");
            alert("User data added")
        }
        router.push('../' + user.uid)
    }

    useEffect(() => {
        if (!user && !loading) {
            router.push("/")
        }
        if (user) {
            if (user.uid != uid) {
                router.push("/profile")
            }
        }
    }, [loading, user]);

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