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
    photo,
}) => {
    return (
        <div>
            <StyleContainer data-gslide="1">
                <StyleCard>
                    <StyleLink url={'/eventos/info/' + id}>
                        <CardImageContainer>
                            <MuiBox>
                                <PictureSpan>
                                    <img alt="name"
                                        className='absolute inset-0 box-border p-0 border border-medium m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover' sizes='100vw'
                                        src={photo}
                                        decoding="async" data-nimg="fill">
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