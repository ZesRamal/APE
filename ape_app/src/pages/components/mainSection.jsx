import React from 'react'
import TournamentListing from './tournamentListing';
import TournamentScroller from './tournamentScroller';

const MainSection = ({ children }) => {
    return (
        <TournamentListing>
            <section className=' bg-white'>
                <div className=' pt-4 mx-4 my-0 overflow-hidden max-w-[1260px]'>
                    <TournamentScroller>
                        <div role='group' aria-labelledby='18'>
                            {children}
                        </div>
                    </TournamentScroller>
                </div>
            </section>
        </TournamentListing>
    )
}

export default MainSection;