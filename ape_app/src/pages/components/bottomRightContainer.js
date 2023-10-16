import React from 'react';

const BottomRightContainer = ({children}) => {
    return(
        <div className='bottomRightContainer absolute bottom-2 right-2 flex flex-col'>
            {children}
        </div>
    );
};

export default BottomRightContainer;