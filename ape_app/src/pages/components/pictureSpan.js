import React from "react";

const PictureSpan = ({children}) => {
    return(
        <span className='pictureSpan m-0 p-0 absolute inset-0 box-border block overflow-hidden opacity-100 bg-transparent bg-left-top bg-repeat bg-scroll bg-none bg-auto bg-origin-padding bg-clip-border border-current border-solid border-0 border-image-none border-1 border-stretch border-100'>
            {children}
        </span>
    )
}

export default PictureSpan;
