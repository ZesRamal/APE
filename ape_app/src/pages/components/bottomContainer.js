import React from 'react';

const BottomContainer = ({children}) => {
    return(
        <div className='botContainer absolute top-2 right-2 flex flex-col'>
            {children}
        </div>
    );
};

export default BottomContainer;