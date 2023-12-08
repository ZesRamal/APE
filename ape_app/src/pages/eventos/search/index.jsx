import { getUser, getUsers } from '../../api/user';
import NavBar from '../../navbar/navbar';
import SearchBar from '../../components/searchBar';
import TournamentListing from '../../components/tournamentListing';
import GliderControls from '../../components/gliderControls';
import GliderContain from '../../components/gliderContain';
import GliderDragable from '../../components/gliderDragable';
import GliderTrack from '../../components/gliderTrack';
import React from 'react'
import Link from 'next/link'
import SearchImages from '../../components/searchImages';
import { getEvents, searchEventsThatHappensToday, searchEventsWithCategory, searchEventsWithDate } from "@/src/pages/api/events"
import { initFirebase } from "@/firebase/firebaseApp";


initFirebase();
const hoy = await searchEventsThatHappensToday()
const platicas = await searchEventsWithCategory("academics")
const deportes = await searchEventsWithCategory("sports")
const eSports = await searchEventsWithCategory("esports")
const otros = await searchEventsWithCategory("otros")

const searchEvents = () => {

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
                            <span className='text-blue-500'>Todo</span>
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
                                        <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Eventos de hoy</h2>
                                    </div>
                                    <GliderControls>
                                        <GliderContain>
                                            <GliderDragable>
                                                <GliderTrack>
                                                    {/* Boxes de eventos */}
                                                    {hoy?.map((event) => (
                                                        <SearchImages
                                                            id={event.id}
                                                            key={event.id}
                                                            name={event.name}
                                                            photo={event.image}>
                                                        </SearchImages>
                                                    ))}
                                                    {hoy == '' && (
                                                        <div className='pl-5'>
                                                            No hay eventos este día :c
                                                        </div>)}
                                                </GliderTrack>
                                            </GliderDragable>
                                        </GliderContain>
                                    </GliderControls>
                                </div>
                            </div>
                            <div className='tournamentScrollerSearch'>
                                <div role='group' aria-labelledby='18'>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Torneos Deportivos</h2>
                                    </div>
                                    <GliderControls>
                                        <GliderContain>
                                            <GliderDragable>
                                                <GliderTrack>
                                                    {/* Boxes de eventos */}
                                                    {deportes?.map((event) => (
                                                        <SearchImages
                                                            id={event.id}
                                                            key={event.id}
                                                            name={event.name}
                                                            photo={event.image}>
                                                        </SearchImages>
                                                    ))}
                                                    {!deportes && (
                                                        <div>
                                                            No hay eventos
                                                        </div>
                                                    )}
                                                </GliderTrack>
                                            </GliderDragable>
                                        </GliderContain>
                                    </GliderControls>
                                </div>
                            </div>
                            <div className='tournamentScrollerSearch'>
                                <div role='group' aria-labelledby='18'>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Torneos ESports</h2>
                                    </div>
                                    <GliderControls>
                                        <GliderContain>
                                            <GliderDragable>
                                                <GliderTrack>
                                                    {/* Boxes de eventos */}
                                                    {eSports?.map((event) => (
                                                        <SearchImages
                                                            id={event.id}
                                                            key={event.id}
                                                            name={event.name}
                                                            photo={event.image}>
                                                        </SearchImages>
                                                    ))}
                                                </GliderTrack>
                                            </GliderDragable>
                                        </GliderContain>
                                    </GliderControls>
                                </div>
                            </div>
                            <div className='tournamentScrollerSearch'>
                                <div role='group' aria-labelledby='18'>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Platicas</h2>
                                    </div>
                                    <GliderControls>
                                        <GliderContain>
                                            <GliderDragable>
                                                <GliderTrack>
                                                    {/* Boxes de eventos */}
                                                    {platicas?.map((event) => (
                                                        <SearchImages
                                                            id={event.id}
                                                            key={event.id}
                                                            name={event.name}
                                                            photo={event.image}>
                                                        </SearchImages>
                                                    ))}
                                                </GliderTrack>
                                            </GliderDragable>
                                        </GliderContain>
                                    </GliderControls>
                                </div>
                            </div>
                            <div className='tournamentScrollerSearch'>
                                <div role='group' aria-labelledby='18'>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Otros</h2>
                                    </div>
                                    <GliderControls>
                                        <GliderContain>
                                            <GliderDragable>
                                                <GliderTrack>
                                                    {/* Boxes de eventos */}
                                                    {otros?.map((event) => (
                                                        <SearchImages
                                                            id={event.id}
                                                            key={event.id}
                                                            name={event.name}
                                                            photo={event.image}>
                                                        </SearchImages>
                                                    ))}
                                                </GliderTrack>
                                            </GliderDragable>
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