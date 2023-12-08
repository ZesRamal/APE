import React from "react";

const GridContainer = ({children}) => {
    return(
        <div className="gridContainer flex box-border flex-nowrap w-full flex-row items-center justify-between">
            {children}
        </div>
    )
}

export default GridContainer;