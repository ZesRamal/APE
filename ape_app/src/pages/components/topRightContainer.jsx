import React from 'react';

const TopRightContainer = ({children}) => {
    return(
        <div className='topRightContainer absolute top-2 right-2 flex flex-col'>
            {children}
        </div>
    );
};

export default TopRightContainer;