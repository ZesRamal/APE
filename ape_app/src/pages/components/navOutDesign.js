import React from 'react'

const NavOutDesign = ({children}) => {
    return (
        <div className='navOutDesign bg-[#031221] bg-center bg-cover bg-no-repeat opacity-100 transition duration-200'>
            <div className='colorNav absolute inset-0 bg-[#031221] opacity-90'>
                {/* in this case isn't necessary initially to add something but if it's required I am going to leave it like this */}
                {children}
            </div>
        </div>
    )
}

export default NavOutDesign;