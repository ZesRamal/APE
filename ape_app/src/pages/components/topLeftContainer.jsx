import React from 'react';

const TopLeftContainer = ({children}) => {
    return(
        <div className='topLeftContainer absolute top-2 left-2 flex flex-col'>
            {children}
        </div>
    );
};

export default TopLeftContainer;