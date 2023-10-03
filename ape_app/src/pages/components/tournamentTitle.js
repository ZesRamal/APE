import React from 'react';

const TournamentTitle = ({children}) => {
    return(
        <span className='tournamentTitle break-all mb-1 text-black text-ellipsis font-medium text-base leading-6'>
            {children}
        </span>
    );
};

export default TournamentTitle;