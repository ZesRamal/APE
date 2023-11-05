'use client'
import React, { useEffect, useState, useRef } from 'react'
import { initFirebase } from '@/firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';
import { changeUserInfo } from '../profile/edit/[uid]';
import { getEvents } from '../api/events';

initFirebase()
const events = await getEvents();

const NavBar = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, loading, error] = useAuthState(auth);
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const signIn = async () => {
    // Inicia sesión con Google
    const signed = await signInWithPopup(auth, provider);
    // Verifica que el dominio del correo electrónico sea "@ite.edu.mx"
    // if (!/@ite.edu.mx\s*$/.test(signed.user.email)) {
    //   // Elimina al usuario
    //   signed.user.delete();
    // }
    if (signed.user.metadata.creationTime == signed.user.metadata.lastSignInTime) {
      changeUserInfo(signed.user.uid, signed.user.displayName, null, null, signed.user.email);
    }
    // Devuelve el usuario
    return user;
  };


  if (loading) {
    return <div>Loading...</div>
  }


  if (typeof window === "undefined") return null;


  function goToProfile() {
    router.push("/profile/" + user.uid);
  }

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded)
  }



  return (
    <div className='box-border'>
      <div className={`navbar ${isExpanded ? 'expanded' : ''}`}>
        <div className='left-section'>
          <div className='toogle-button' onClick={toggleNavbar}>
            <i className='fas fa-bars'></i>
          </div>
          <a href='/'>Inicio</a>
          {/* <img src='../images/logo-ensenada.png' alt='logo' className='logo'></img> */}
        </div>
        <div className='right-section'>
          {!user && (
            <div className='profile-avatar' onClick={signIn} title='SignIn'>
              <i className='fas fa-user'></i>
            </div>)}
          {user && (
            <div className='profile-avatar'>
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" width={60} onClick={goToProfile} />
              <div>
                {user.displayName}
              </div>
              <button className=' bg-red-600 rounded-lg' onClick={() => { auth.signOut(); router.push("/") }}>LogOut</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar;