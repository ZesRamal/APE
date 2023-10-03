import Head from 'next/head'
import Image from 'next/image'
import LeftContainer from './components/leftContainer'
import StyleRow from './components/styleRow'
import TournamentTitle from './components/tournamentTitle'
import { Inter } from 'next/font/google'
import RightContainer from './components/rightContainer'
import BottomContainer from './components/bottomContainer'
import TopContainer from './components/topContainer'
import SubtitleEvents from './components/subtitleEvents'
import Buttons from './components/buttons'
import ButtonGroup from './components/buttonGroup'
import SectionTitles from './components/sectionTitles'
import ContentRegion from './components/contentRegion'
import Logo from './components/logo'
import HomePageBanner from './components/homePageBanner'
import TournamentListing from './components/tournamentListing'
import StyleContainer from './components/styleCard'
import GliderContain from './components/gliderContain'
import GliderControls from './components/gliderControls'
import GliderTrack from './components/gliderTrack'
import StyleLink from './components/StyleLink'
import CardImageContainer from './components/cardImageContainer'
import MuiBox from './components/muiBox'
import PictureSpan from './components/pictureSpan'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="box-border *:before:*:after">
      <Head>
        <title>EvenTec</title>
        <link rel="icon" href='/favicon.ico'/>

      </Head>
      <div className='homePageStructure'>
        {/* Creacion de la barra de navegacion escondida */}
        <div className='hiddenCSS'>
          <div className='appBarSpacer'></div>
        </div>
        {/* Creacion del header */}
        <HomePageBanner>
          <Logo>EvenTec</Logo>
          <div className='blueBar w-[70px] h-[4px] bg-blue-700 m-1'>
          </div>
          {/* Grupo de Botones*/}
          <ButtonGroup>
            <Buttons>
              <span>Crear Eventos</span>
            </Buttons>
            <Buttons>
              <span>Buscar Eventos</span>
            </Buttons>
          </ButtonGroup>
        </HomePageBanner>
        <main>
          <div>
            <TournamentListing>
              <div role='group' aria-label='18'>
                {/* titulos */}
                <SectionTitles>
                  Eventos Recomendados
                </SectionTitles>
                {/* ventanas */}
                <GliderControls>
                  <GliderContain>
                    <GliderDragable>
                      <GliderTrack>
                        <StyleContainer>
                          <StyleCard>
                            <StyleLink>
                              <CardImageContainer>
                                <MuiBox>
                                  <PictureSpan>
                                    <img className='inset-0 absolute box-border p-[100%] min-w-full max-w-full min-h-full max-h-fulEventosl object-cover ' alt="Overwatch 2" src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc5e8f5bdb29916db/64cd4c11c45759478fa1f861/S6_Overview_Thumbnail.jpg' decoding='async' data-nimg="fill" sizes='100vw' srcSet='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc5e8f5bdb29916db/64cd4c11c45759478fa1f861/S6_Overview_Thumbnail.jpg'></img>
                                  </PictureSpan>
                                </MuiBox>
                                <LeftContainer></LeftContainer>
                                <RightContainer></RightContainer>
                                <TopContainer></TopContainer>
                                <BottomContainer></BottomContainer>
                              </CardImageContainer>
                              <ContentRegion>
                                <TournamentTitle>
                                  Overwatch 2 Tournament
                                </TournamentTitle>
                                <SubtitleEvents>
                                  Overwatch
                                </SubtitleEvents>
                                <div className='infoContainer'>
                                  <StyleRow></StyleRow>
                                  <StyleRow></StyleRow>
                                  <StyleRow></StyleRow>
                                </div>
                              </ContentRegion>
                            </StyleLink>
                          </StyleCard>
                        </StyleContainer>
                      </GliderTrack>
                    </GliderDragable>
                  </GliderContain>
                </GliderControls>
              </div>
            </TournamentListing>
          </div>
        </main>
      </div>
    </div>
  )
}
