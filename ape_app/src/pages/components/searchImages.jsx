import React from "react";

const SearchImages = ({children}) => {
    return(
        <div className='styleContainerSearch box-border m-0 pl-0 pt-0'>
            <div className="flex">
                <a href="" className="bg-transparent cursor-pointer ">
                <div className='h-[120px] w-[90px] relative flex items-center justify-center rounded-[4px] select-none'>
                    <span className="imageSearchSectionSpan">
                        {children}
                    </span>
                </div>
                </a>
            </div>
        </div>
    )
}

export default SearchImages