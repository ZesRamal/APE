import React from 'react';

const SubtitleEvents = ({children}) => {
    return(
        <span className='subtitle text-sm leading-[18px] opacity-60 block font-normal text-black'>
            {children}
        </span>
    );
};

export default SubtitleEvents;