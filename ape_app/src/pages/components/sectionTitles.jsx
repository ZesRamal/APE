import React from 'react';

const SectionTitles = ({children}) => {
    return(
        <div className='flex justify-between items-center flex-wrap'>
            <h2 className='pl-2 my-4 text-[20px] sm:text-[24px] leading-5 text-black font-bold '>{children}</h2>
        </div>
    );
}; 

export default SectionTitles;