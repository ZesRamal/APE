import React from "react";
import { Icon } from "@iconify/react";
import StyleContainer from "./styleContainer";
import StyleCard from "./styleCard";
import StyleLink from "./styleLink";
import CardImageContainer from "./cardImageContainer";
import MuiBox from "./muiBox";
import PictureSpan from "./pictureSpan";
import BottomLeftContainer from "./bottomLeftContainer";
import BottomRightContainer from "./bottomRightContainer";
import TopLeftContainer from "./topLeftContainer";
import TopRightContainer from "./topRightContainer";
import ContentRegion from "./contentRegion";
import TournamentTitle from "./tournamentTitle";
import DateEvents from "./dateEvents";

const EventBox = ({
    name,
    id,
    date,
    direction,
    description,
    handleClickPark,
    photo,
    //onClick={() => handleClickPark(id)}
}) => {
    return (
        <div>
            <StyleContainer data-gslide="1">
                <StyleCard>
                    <StyleLink id={id}>
                        <CardImageContainer>
                            <MuiBox>
                                <PictureSpan>
                                    <img alt=""
                                        className='absolute inset-0 box-border p-0 border border-medium m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover' sizes='100vw'
                                        src={photo}
                                        decoding="async" data-nimg="fill" srcSet="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 640w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 750w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 828w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1080w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1200w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1920w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 2048w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 3840w">
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
                                {name}
                            </TournamentTitle>
                            <DateEvents>
                                {date}
                            </DateEvents>
                        </ContentRegion>
                    </StyleLink>
                </StyleCard>
            </StyleContainer>
        </div>
    );
};

export default EventBox;