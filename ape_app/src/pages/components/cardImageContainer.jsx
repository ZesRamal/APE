import React from "react";

const CardImageContainer = ({ children }) => {
    return (
        <div className='cardImageContainer flex w-full h-[170px] relative'>
            {children}
        </div>
    )
}

export default CardImageContainer;
