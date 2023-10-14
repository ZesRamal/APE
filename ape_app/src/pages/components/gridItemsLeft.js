import React from "react";

const GridItemsLeft = ({children}) => {
    return(
        <div className="gridItemLeft overflow-hidden whitespace-nowrap text-ellipsis m-0 box-border">
            {children}
        </div>
    )
}

export default GridItemsLeft;