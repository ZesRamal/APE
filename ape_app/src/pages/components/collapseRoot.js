import React from 'react';

const CollapseRoot = ({children}) => {
    return(
        <div className='collapseRoot min-h-0 h-auto duration-300 overflow-visible transition-transform'>
            {children}
        </div>
    )
}
export default CollapseRoot;