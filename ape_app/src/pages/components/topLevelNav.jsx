import React from 'react'

const TopLevelNav = ({children}) => {
    return (
        <div className='topLevelNav flex w-full items-center bg-blue-900 text-white h-[4rem] overflow-hidden relative'>
            {children}
        </div>
    );
}

export default TopLevelNav;