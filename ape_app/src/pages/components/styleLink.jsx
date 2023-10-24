import React from "react";

const StyleLink = ({children}) => {
    return(
        <a className='bg-transparent transition-colors duration-100 ease delay-0 cursor-pointer no-underline' data-skiptrap="true" href="">
            {children}
        </a>
    )
}

export default StyleLink;
