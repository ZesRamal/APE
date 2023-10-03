import React from 'react';

const RightContainer = ({children}) => {
    return(
        <div className='rightContainer absolute bottom-2 right-2 flex flex-col'>
            {children}
        </div>
    );
};

export default RightContainer;