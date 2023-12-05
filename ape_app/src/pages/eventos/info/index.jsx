import NavBar from '../../navbar/navbar';
import CardImageContainer from '../../components/cardImageContainer';
import MuiBox from '../../components/muiBox';
import PictureSpan from '../../components/pictureSpan';
import TopLeftContainer from '../../components/topLeftContainer';
import TopRightContainer from '../../components/topRightContainer';
import BottomLeftContainer from '../../components/bottomLeftContainer';
import BottomRightContainer from '../../components/bottomRightContainer';
import MainSection from '../../components/mainSection';
import SectionTitles from '../../components/sectionTitles';

import React from 'react';

const infoEvents = () => {
    return(
        <div className="box-border *:before:*:after">
            <NavBar/>
            <div>
                <CardImageContainer>
                    <MuiBox>
                        <PictureSpan>
                            <img alt="Overwatch Collegiate Homecoming 2023 - Overwatch 2" className='absolute inset-0 box-border p-0 border border-medium m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover' sizes='100vw' src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0" decoding="async" data-nimg="fill" srcSet="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 640w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 750w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 828w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1080w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1200w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1920w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 2048w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 3840w">
                            </img>
                        </PictureSpan>
                    </MuiBox>
                    <TopLeftContainer/>
                    <TopRightContainer/>
                    <BottomLeftContainer/>
                    <BottomRightContainer/>
                </CardImageContainer>
            </div>
            <MainSection>
                <SectionTitles>
                    Torneo Overwatch 2
                </SectionTitles>
            </MainSection>
        </div>
    )
}

export default infoEvents;