
import React from "react";

const StyleContainer = ({children}) => {
    return(
        <div className='h-auto w-fit my-0 mx-2 select-none min-w-[150px] relative rounded-md bg-white transition-shadow duration-100 ease-linear overflow-hidden shadow-sm' data-gslide="0">
            {children}
        </div>
    )
}

export default StyleContainer;
