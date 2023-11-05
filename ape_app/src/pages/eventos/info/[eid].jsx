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
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initFirebase } from '@/firebase/firebaseApp'
import { useRouter } from 'next/router';
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseApp";
import { getEvent } from '../../api/events';

const infoEvents = () => {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const [eventName, setEventName] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [location, setLocation] = useState('');
    const [allowEdit, setAllowEdit] = useState(false);
    const router = useRouter()
    const {
        query: { eid },
    } = router;

    useEffect(() => {
        ; (async () => {
            if (!eid) return false;
            const event = await getEvent(eid);
            if (!event) {
                router.push('/eventos')
            } else {
                setEventName(event.name)
                setDetails(event.details)
                setCategory(event.category)
                setStartDate(event.startDate)
                setEndDate(event.endDate)
                setOrganizer(event.organizer)
                setLocation(event.location)
            }
        })()
    }, [eid, user])

    function goToEdit() {
        router.replace("/eventos/edit/" + eid);
    }

    return (
        <div className="box-border *:before:*:after">
            <NavBar />
            {user && user.uid == organizer && (
                <div>
                    <div onClick={goToEdit}>Edit</div>
                </div>
            )}
            <div>
                <CardImageContainer>
                    <MuiBox>
                        <PictureSpan>
                            <img alt="Overwatch Collegiate Homecoming 2023 - Overwatch 2" className='absolute inset-0 box-border p-0 border border-medium m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover' sizes='100vw' src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0" decoding="async" data-nimg="fill" srcSet="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 640w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 750w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 828w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1080w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1200w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 1920w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 2048w, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F574662%2Fimage-7b6101306d23a14cad31cccb6afe6728-optimized.png&amp;ehk=HRu0%2BHEaWIxE3ldMfYQTHh5PgZMZhBFVHcRiPpdAvc8%3D&amp;w=340&amp;r=0 3840w">
                            </img>
                        </PictureSpan>
                    </MuiBox>
                    <TopLeftContainer />
                    <TopRightContainer />
                    <BottomLeftContainer />
                    <BottomRightContainer />
                </CardImageContainer>
            </div>
            <MainSection>
                <SectionTitles>
                    {eventName}
                </SectionTitles>
            </MainSection>
        </div>
    )
}

export default infoEvents;