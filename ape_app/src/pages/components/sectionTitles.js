import React from 'react';

const SectionTitles = ({children}) => {
    return(
        <div className='flex justify-between items-center flex-wrap'>
            <h2 className='my-3 text-[18px] leading-5 text-black font-extrabold md:text-[24px] md:leading-7 '>{children}</h2>
        </div>
    );
}; 

export default SectionTitles;