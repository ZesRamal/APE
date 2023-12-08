import React from "react";

const CardImageContainerinfo = ({children}) => {
    return(
        <div className='cardImageContainer flex w-full h-[190px] relative'>
            {children}
        </div>
    )
}

export default CardImageContainerinfo;
