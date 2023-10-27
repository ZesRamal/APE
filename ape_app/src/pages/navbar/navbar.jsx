import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { initFirebase } from '@/firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';


const NavBar = () => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false);

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user && router.pathname == "/profile") {
    router.push("/")
  }

  const handleLoginWithGoogle = async () => {
    if (!user) {
      const result = await signInWithPopup(auth, provider);
    } else {
      router.push("/profile")
    }
  };

  if (user) {
    if (/@ite.edu.mx\s*$/.test(user.email) == false) {
      user.delete();
    }
  }

  // useEffect(()=> {
  //   // verificacion del estado de autentificacion del usuario
  //   firebase.auth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       setUser(authUser);
  //     } else {
  //       setUser(null)
  //     }
  //   })
  // },[])


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
          <div className='profile-avatar' onClick={handleLoginWithGoogle}>
            <i className='fas fa-user'></i>
          </div>
          {user && (
            <div className='profile-avatar'>
              <img src="{user.photoURL}" alt="profile" />
              <div>{user.displayName}
              </div>
              <button className=' bg-red-600 rounded-lg' onClick={() => auth.signOut()}>LogOut</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar;