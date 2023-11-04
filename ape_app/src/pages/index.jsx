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
import { getEvents } from './api/events'


const inter = Inter({ subsets: ['latin'] })
const events = await getEvents();

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
                      Eventos Recomendados
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
                            {/* Boxes de eventos */}
                            <StyleContainer data-gslide="3">
                              <StyleCard>
                                <StyleLink>
                                  <CardImageContainer>
                                    <MuiBox>
                                      <PictureSpan>
                                        <img alt="Overwatch Collegiate Homecoming 2023 - Overwatch 2" className='absolute inset-0 box-border p-0 border border-medium m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover' sizes='100vw' src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0" decoding="async" data-nimg="fill" srcSet="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 640w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 750w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 828w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1080w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1200w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1920w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 2048w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 3840w">
                                        </img>
                                      </PictureSpan>
                                    </MuiBox>
                                    <BottomLeftContainer></BottomLeftContainer>
                                    <BottomRightContainer></BottomRightContainer>
                                    <TopLeftContainer></TopLeftContainer>
                                    <TopRightContainer></TopRightContainer>
                                  </CardImageContainer>
                                  <ContentRegion>
                                    <TournamentTitle>
                                      Overwatch Tournament
                                    </TournamentTitle>
                                    <DateEvents>
                                      21 september 2023
                                    </DateEvents>
                                  </ContentRegion>
                                </StyleLink>
                              </StyleCard>
                            </StyleContainer>
                            {/* 2 */}
                            <StyleContainer data-gslide="4">
                              <StyleCard>
                                <StyleLink>
                                  <CardImageContainer>
                                    <MuiBox>
                                      <PictureSpan>
                                        <img alt="Overwatch Collegiate Homecoming 2023 - Overwatch 2" className='absolute inset-0 box-border p-0 border border-medium m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover' sizes='100vw' src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0" decoding="async" data-nimg="fill" srcSet="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 640w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 750w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 828w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1080w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1200w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1920w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 2048w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 3840w">
                                        </img>
                                      </PictureSpan>
                                    </MuiBox>
                                    <BottomLeftContainer></BottomLeftContainer>
                                    <BottomRightContainer></BottomRightContainer>
                                    <TopLeftContainer></TopLeftContainer>
                                    <TopRightContainer></TopRightContainer>
                                  </CardImageContainer>
                                  <ContentRegion>
                                    <TournamentTitle>
                                      Overwatch Tournament
                                    </TournamentTitle>
                                    <DateEvents>
                                      21 september 2023
                                    </DateEvents>
                                  </ContentRegion>
                                </StyleLink>
                              </StyleCard>
                            </StyleContainer>
                            {/* 3 */}
                            {/* 2 */}
                            <StyleContainer data-gslide="5">
                              <StyleCard>
                                <StyleLink>
                                  <CardImageContainer>
                                    <MuiBox>
                                      <PictureSpan>
                                        <img alt="Overwatch Collegiate Homecoming 2023 - Overwatch 2" className='absolute inset-0 box-border p-0 border border-medium m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover' sizes='100vw' src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0" decoding="async" data-nimg="fill" srcSet="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 640w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 750w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 828w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1080w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1200w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1920w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 2048w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 3840w">
                                        </img>
                                      </PictureSpan>
                                    </MuiBox>
                                    <BottomLeftContainer></BottomLeftContainer>
                                    <BottomRightContainer></BottomRightContainer>
                                    <TopLeftContainer></TopLeftContainer>
                                    <TopRightContainer></TopRightContainer>
                                  </CardImageContainer>
                                  <ContentRegion>
                                    <TournamentTitle>
                                      Overwatch Tournament
                                    </TournamentTitle>
                                    <DateEvents>
                                      21 september 2023
                                    </DateEvents>
                                  </ContentRegion>
                                </StyleLink>
                              </StyleCard>
                            </StyleContainer>
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
