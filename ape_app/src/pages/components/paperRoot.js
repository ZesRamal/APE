import React from 'react'

const paperRoot = ({children}) => {
    return (
        <div class="paperRoot flex flex-col w-full fixed box-border top-0 left-auto right-0 bg-blue-600 text-white -z-[1030] transition-shadow duration-300 ease-cubic-0-4-0-2 hover:shadow-lg">
            {children}
        </div>
    );
}

export default paperRoot;