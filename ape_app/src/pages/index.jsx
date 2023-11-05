import React, { useState, useEffect } from "react";
import TournamentTitle from './components/tournamentTitle'
import { Inter } from 'next/font/google'
import ButtonGroup from './components/buttonGroup'
import SectionTitles from './components/sectionTitles'
import ContentRegion from './components/contentRegion'
import Logo from './components/logo'
import HomePageBanner from './components/homePageBanner'
import TournamentListing from './components/tournamentListing'
import StyleContainer from './components/styleCard'
import GliderContain from './components/gliderContain'
import GliderControls from './components/gliderControls'
import GliderDragable from './components/gliderDragable'
import GliderTrack from './components/gliderTrack'
import StyleCard from './components/styleCard'
import StyleLink from './components/styleLink'
import CardImageContainer from './components/cardImageContainer'
import MuiBox from './components/muiBox'
import PictureSpan from './components/pictureSpan'
import TournamentScroller from './components/tournamentScroller'
import BottomLeftContainer from './components/bottomLeftContainer'
import BottomRightContainer from './components/bottomRightContainer'
import TopLeftContainer from './components/topLeftContainer'
import TopRightContainer from './components/topRightContainer'
import DateEvents from './components/dateEvents'
import NavBar from './navbar/navbar'
import SearchEventButton from './components/searchEventButton'
import CreateEventButton from './components/createEventButton'
import EventBox from './components/eventBox'
import { getEvents, searchEventsWithCategory } from './api/events'
import { initFirebase } from "@/firebase/firebaseApp";


const inter = Inter({ subsets: ['latin'] })
const events = await getEvents();
const platicas = await searchEventsWithCategory("academics")
const deportes = await searchEventsWithCategory("sports")
const eSports = await searchEventsWithCategory("Esports")
initFirebase();

export default function Home() {
  // useEffect para cargar todos los eventos
  // useEffect(() => {
  //   ; (async () => {
  //     const colRef = collection(db, 'eventos')
  //     const snapshots = await getDocs(colRef)
  //     const docs = snapshots.docs.map(doc => {
  //       const data = doc.data()
  //       data.id = doc.id
  //       return data
  //     })
  //   })()
  // }, [])


  return (
    <div className="box-border *:before:*:after">
      <div>
        <NavBar />
        <HomePageBanner>
          <Logo>EvenTec</Logo>
          <div className='blueBar w-[70px] h-[4px] bg-blue-700 m-1'>
          </div>
          {/* Grupo de Botones*/}
          <ButtonGroup>
            <CreateEventButton>
              <span>Crear Eventos</span>
            </CreateEventButton>
            <SearchEventButton>
              <span>Buscar Eventos</span>
            </SearchEventButton>
          </ButtonGroup>
        </HomePageBanner>
        <main id='main'>
          <TournamentListing>
            <section className=' bg-white'>
              <div className=' pt-12 mx-4 my-0 overflow-hidden max-w-[1260px]'>
                <TournamentScroller>
                  <div role='group' aria-labelledby='18'>
                    <SectionTitles>
                      Eventos Recientes
                    </SectionTitles>
                    <GliderControls>
                      <GliderContain>
                        <GliderDragable>
                          <GliderTrack>
                            {events?.map((event) => (
                              <EventBox
                                key={event.id}
                                id={event.id}
                                name={event.name}
                                date={event.id}
                                photo={"https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&w=340&r=0"}
                              />
                            ))}
                          </GliderTrack>
                        </GliderDragable>
                      </GliderContain>
                    </GliderControls>
                  </div>
                </TournamentScroller>
                {/* Segunda seccion del Listing */}
                <TournamentScroller>
                  <div role='group' aria-labelledby='18'>
                    <SectionTitles>
                      Platicas
                    </SectionTitles>
                    <GliderControls>
                      <GliderContain>
                        <GliderDragable>
                          <GliderTrack>
                            {platicas?.map((event) => (
                              <EventBox
                                key={event.id}
                                id={event.id}
                                name={event.name}
                                date={event.id}
                                photo={"https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&w=340&r=0"}
                              />
                            ))}
                          </GliderTrack>
                        </GliderDragable>
                      </GliderContain>
                    </GliderControls>
                  </div>
                </TournamentScroller>
                {/* Tercera seccion del Listing */}
                <TournamentScroller>
                  <div role='group' aria-labelledby='18'>
                    <SectionTitles>
                      Deportes
                    </SectionTitles>
                    <GliderControls>
                      <GliderContain>
                        <GliderDragable>
                          <GliderTrack>
                            {deportes?.map((event) => (
                              <EventBox
                                key={event.id}
                                id={event.id}
                                name={event.name}
                                date={event.id}
                                photo={"https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&w=340&r=0"}
                              />
                            ))}
                          </GliderTrack>
                        </GliderDragable>
                      </GliderContain>
                    </GliderControls>
                  </div>
                </TournamentScroller>
                {/* Cuarta seccion del Listing */}
                <TournamentScroller>
                  <div role='group' aria-labelledby='18'>
                    <SectionTitles>
                      ESports
                    </SectionTitles>
                    <GliderControls>
                      <GliderContain>
                        <GliderDragable>
                          <GliderTrack>
                            {eSports?.map((event) => (
                              <EventBox
                                key={event.id}
                                id={event.id}
                                name={event.name}
                                date={event.id}
                                photo={"https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&w=340&r=0"}
                              />
                            ))}
                          </GliderTrack>
                        </GliderDragable>
                      </GliderContain>
                    </GliderControls>
                  </div>
                </TournamentScroller>
              </div>
            </section>
          </TournamentListing>
        </main>
      </div>
    </div>
  )
}
