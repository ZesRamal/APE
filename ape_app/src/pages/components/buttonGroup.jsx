import React from 'react';

const ButtonGroup = ({children}) => {
    return(
        <div className='buttonGroup flex md:flex-row flex-col mt-[2.4rem] space-y-5 md:space-y-0 space-x-0 md:space-x-4'>
            {children}
        </div>
    );
}; 

export default ButtonGroup;