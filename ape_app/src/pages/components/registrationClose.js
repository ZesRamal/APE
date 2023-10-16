import React from 'react'

const RegistrationClosedBox = ({children}) => {
    return (
        <span className='registrationClosed text-white bg-red-700 px-2 py-[3px] rounded font-bold'>
            {children}
        </span>
    )
}

export default RegistrationClosedBox;