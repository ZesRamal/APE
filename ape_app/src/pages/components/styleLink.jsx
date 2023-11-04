import React from "react";

const StyleLink = ({ id, children }) => {
    return (
        <a className='bg-transparent transition-colors duration-100 ease delay-0 cursor-pointer no-underline' data-skiptrap="true" href={"/events/info/" + id}>
            {children}
        </a>
    )
}

export default StyleLink;
