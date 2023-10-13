import React from 'react'

const topLevelNav = ({children}) => {
    return (
        <div className='topLevelNav flex w-full items-center bg-blue-900 text-white h-[5.6rem] overflow-hidden relative'>
            {children}
        </div>
    );
}

export default topLevelNav;