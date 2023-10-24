import React from 'react';

const MuiPaper = ({children}) => {
    return(
        <div className='muiPaper transition-shadow shadow flex flex-col w-full box-border fixed z-[1030] top-0 left-auto right-0 bg-blue-800 text-white'>
            {children}
        </div>
    )
}
export default MuiPaper;