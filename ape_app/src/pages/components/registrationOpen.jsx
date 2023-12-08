import React from 'react'

const RegistrationOpenBox = ({children}) => {
    return (
        <span className='registrationOpen text-white bg-green-700 px-2 py-[3px] rounded font-bold'>
            {children}
        </span>
    )
}

export default RegistrationOpenBox;