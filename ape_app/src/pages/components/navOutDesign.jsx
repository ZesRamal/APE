import React from 'react'

const NavOutDesign = ({children}) => {
    return (
        <div className='navOutDesign bg-blue-800 transition-opacity bg-center bg-cover bg-no-repeat opacity-100 h-full absolute w-full'>
            {children}
        </div>
    )
}

export default NavOutDesign;