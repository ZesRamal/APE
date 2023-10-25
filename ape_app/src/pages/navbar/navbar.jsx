import React, { useEffect, useState } from 'react'
import Head from 'next/head';


const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [user, setUser] = useState(null);

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

  const handleLoginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // el usuario inico sesion
      const user = result.user;
      setUser(user);
    })
    .catch((error) => {
      // Manejo de errores de inicio de sesion
      console.error(error)
    });
  };

  return(
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
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default NavBar;