import React from 'react';

const DateEvents = ({children}) => {
    return(
        <span className='dateEvents text-sm leading-[18px] opacity-60 block font-normal text-[#fff]'>
            {children}
        </span>
    );
};

export default DateEvents;