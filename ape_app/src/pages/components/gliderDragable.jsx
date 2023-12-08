import React from "react";

const GliderDragable = ({children}) => {
    return(
        <div className='gliderDragable mx-[-8px] my-[-16px] px-0 py-4 select-none cursor-grab overflow-y-hidden relative'>
            {children}
        </div>
    )
}

export default GliderDragable;
