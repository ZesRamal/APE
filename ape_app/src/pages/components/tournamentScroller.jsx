import React from 'react';

const TournamentScroller = ({children}) => {
    return(
        <div className='tournamentScroller ml-auto mr-auto pb-16'>
            {children}
        </div>
    );
};

export default TournamentScroller;