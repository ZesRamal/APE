import React from "react";

const StyleLink = ({children}) => {
    <a className='bg-transparent transition-background transition-color duration-100 ease delay-0 cursor-pointer no-underline line-through' data-skiptrap="true" href="">
        {children}
    </a>
}

export default StyleLink;