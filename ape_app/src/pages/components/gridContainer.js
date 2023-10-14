import React from "react";

const GridContainer = ({children}) => {
    return(
        <div className="gridRoot flex box-border flex-nowrap w-full flex-row items-center">
            {children}
        </div>
    )
}

export default GridContainer;