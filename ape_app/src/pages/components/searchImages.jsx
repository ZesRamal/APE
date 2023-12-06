import React from "react";

const SearchImages = ({ id, photo, name }) => {
    return (
        <div className='styleContainerSearch box-border m-0 pl-0 pt-0'>
            <div className="flex">
                <a href={'/eventos/info/' + id} className="bg-transparent cursor-pointer ">
                    <div className='h-[240px] w-[180px] relative flex items-center justify-center rounded-[4px] select-none'>
                        <span className="imageSearchSectionSpan">
                            <div className="relative w-auto h-auto rounded overflow-hidden group">
                                <img src={photo} decoding="async" data-nimg="intrinsic" className='w-full h-[240px] object-cover opacity-100 group-hover:opacity-50' />
                                <div className="absolute top-[120px] left-0 right-0 bottom-0 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] opacity-0 group-hover:opacity-100">
                                    {name}
                                </div>
                            </div>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SearchImages;