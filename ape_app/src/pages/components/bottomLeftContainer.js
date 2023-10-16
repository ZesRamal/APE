import React from 'react';

const BottomLeftContainer = ({children}) => {
    return(
        <div className='bottomLeftContainer absolute bottom-2 left-2 flex flex-col'>
            {children}
        </div>
    );
};

export default BottomLeftContainer;