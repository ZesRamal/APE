import React from 'react';

const ContentRegion = ({children}) => {
    return(
        <div className='contentRegion pt-5 pb-4 px-4 relative bg-[#1d3a69]'>
            {children}
        </div>
    );
}; 

export default ContentRegion;