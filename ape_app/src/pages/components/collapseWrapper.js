import React from 'react'

const CollapseWrapper = ({children}) => {
    return (
        <div class="collapseWrapper flex w-full">
            {children}
        </div>
    );
}

export default CollapseWrapper;