import React from 'react';

const Logo = ({children}) => {
    return(
        <div className='logo'>
            <h1 className='text-[70px] md:text-[108px] text-white font-merriweather font-serif'>{children}</h1>
        </div>
    );
}; 

export default Logo;