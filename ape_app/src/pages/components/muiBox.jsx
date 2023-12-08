import React from "react";

const MuiBox = ({children}) => {
    return(
        <div className='w-full h-full relative'>
            {children}
        </div>
    )
}

export default MuiBox;
