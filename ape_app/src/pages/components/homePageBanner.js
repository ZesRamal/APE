import React from 'react';

const HomePageBanner = ({children}) => {
    return(
        <div className='homePageBanner flex flex-col items-center text-center bg-gradient-to-r from-sky-500 to-indigo-500 bg-[50%] bg-no-repeat bg-cover md:p-[7.6rem] p-[3.2rem]'>
            {children}
        </div>
    )
}

export default HomePageBanner;
