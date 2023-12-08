import React from 'react';

const TournamentTitle = ({children}) => {
    return(
        <span className='tournamentTitle break-all mb-1 text-white overflow-hidden text-ellipsis font-medium text-lg'>
            {children}
        </span>
    );
};

export default TournamentTitle;