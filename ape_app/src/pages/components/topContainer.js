import React from 'react';

const TopContainer = ({children}) => {
    return(
        <div className='topContainer absolute top-2 left-2 flex flex-col'>
            {children}
        </div>
    );
};

export default TopContainer;