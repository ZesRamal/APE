import React from 'react'

const AppMobileNav = ({children}) => {
    return (
        <div className='appMobileNav sticky top-0 z-[1031]'>
            {children}
        </div>
    );
}

export default AppMobileNav;
