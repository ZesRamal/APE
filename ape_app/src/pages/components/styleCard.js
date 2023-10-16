import React from "react";

const StyleCard = ({children}) => {
    return(
        <div className='styleCard h-fit w-[300px] sm:w-[389px] mx-[8px]'>
            {children}
        </div>
    )
}

export default StyleCard;
