import React from 'react';

const LeftContainer = ({children}) => {
    return(
        <div className='leftContainer absolute bottom-2 left-2 flex flex-col'>
            {children}
        </div>
    );
};

export default LeftContainer;