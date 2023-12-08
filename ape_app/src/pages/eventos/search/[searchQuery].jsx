import NavBar from '../../navbar/navbar';
import SearchBar from '../../components/searchBar';
import TournamentListing from '../../components/tournamentListing';
import GliderControls from '../../components/gliderControls';
import GliderContain from '../../components/gliderContain';
import GliderTrack from '../../components/gliderTrack';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import React from 'react'
import Link from 'next/link'
import SearchImages from '../../components/searchImages';
import { searchEventsWithName } from '../../api/events';
import { initFirebase } from "@/firebase/firebaseApp";

initFirebase();

const searchEvents = () => {
    const router = useRouter()
    const pathname = router.query.searchQuery
    const [search, setSearch] = useState()
    useEffect(() => {
        ; (async () => {
            if (pathname) {
                const busqueda = await searchEventsWithName(pathname)
                setSearch(busqueda)
            }
        })()
    }, [pathname])

    return (
        <div className="box-border *:before:*:after">
            <NavBar>Buscar Eventos</NavBar>
            <div className='searchBarContainer'>
                <SearchBar />
            </div>
            <div className='eventPerCategoryContainer flex flex-col'>
                <div className='flex flex-row justify-center px-0'>
                    <Link href="/eventos/search" className='ml-0'>
                        <div className='searchTitleSection'>
                            <span className='text-black'>Todo</span>
                        </div>
                    </Link>
                    <Link href='/eventos/search/today'>

                        <div className='searchTitleSection'>
                            <span className='text-black'>Eventos de hoy</span>
                        </div>
                    </Link>
                    <Link href='/eventos/search/deportes'>
                        <div className='searchTitleSection'>
                            <span className='text-black'>Deportes</span>
                        </div>
                    </Link>
                    <Link href='/eventos/search/esports'>
                        <div className='searchTitleSection'>
                            <span className='text-black'>ESports</span>
                        </div>
                    </Link>
                    <Link href='/eventos/search/platicas'>
                        <div className='searchTitleSection'>
                            <span className='text-black'>Pláticas</span>
                        </div>
                    </Link>
                    <Link href='/eventos/search/platicas'>
                        <div className='searchTitleSection'>
                            <span className='text-black'>Otros</span>
                        </div>
                    </Link>

                </div>
                <div className='blackBar'></div>
                <TournamentListing>
                    <section className=' bg-white'>
                        <div className=' pt-0 mx-4 my-0 overflow-hidden max-w-[1260px]'>
                            <div className='tournamentScrollerSearch'>
                                <div role='group' aria-labelledby='18'>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Búsqueda</h2>
                                    </div>
                                    <GliderControls>
                                        <GliderContain>
                                            <div className='image-grid'>
                                                <GliderTrack>
                                                    {/* Boxes de eventos */}
                                                    {search?.map((event) => (
                                                        <SearchImages
                                                            id={event.id}
                                                            key={event.id}
                                                            name={event.name}
                                                            photo={event.image}>
                                                        </SearchImages>
                                                    ))}
                                                </GliderTrack>
                                            </div>
                                        </GliderContain>
                                    </GliderControls>
                                </div>
                            </div>
                        </div>
                    </section>
                </TournamentListing>
            </div>
        </div>
    )
}
export default searchEvents;