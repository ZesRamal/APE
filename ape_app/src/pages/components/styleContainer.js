
import React from "react";

const StyleContainer = ({children}) => {
    return(
        <div className='h-auto w-80 my-0 mx-2 select-none min-w-[150px] visible left-1 relative overflow-hidden rounded-md transition-transform transition-shadow-md shadow-md hover:shadow-lg focus:shadow-lg' data-gslide="0">
            {children}
        </div>
    )
}

export default StyleContainer;
