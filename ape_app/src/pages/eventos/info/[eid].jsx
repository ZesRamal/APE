import NavBar from '../../navbar/navbar';
import CardImageContainerinfo from '../../components/cardImageContainerinfo';
import MuiBox from '../../components/muiBox';
import PictureSpaninfo from '../../components/pictureSpanINFO';
import SectionTitles from '../../components/sectionTitles';
import MainSection from '../../components/mainSection';
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initFirebase } from '@/firebase/firebaseApp'
import { useRouter } from 'next/router';
import { getDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebaseApp";
import { getEvent, registerUserToEvent, isUserRegisteredToEvent, unregisterUserFromEvent, getEventAttendees, getEventAttendeeNames } from '../../api/events';
import { getUserMailByID, getUserNameByID } from '../../api/user';

const infoEvents = () => {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const [eventName, setEventName] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [organizerName, setOrganizerName] = useState('');
    const [organizerMail, setOrganizerMail] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [attendeesID, setAttendeesID] = useState([]);
    const [attendees, setAttendees] = useState([]);
    const [registered, setRegistered] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
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
                setStartTime(event.startTime)
                setOrganizer(event.organizer)
                const orgMail = await getUserMailByID(event.organizer)
                const orgName = await getUserNameByID(event.organizer)
                setOrganizerName(orgName)
                setOrganizerMail(orgMail)
                setLocation(event.location)
                setImage(event.image)
                const attendeesIDList = await getEventAttendees(eid)
                setAttendeesID([...attendeesID, ...attendeesIDList])
                const attendeesNameList = await getEventAttendeeNames(eid)
                setAttendees([...attendees, ...attendeesNameList])
                if (user) {
                    const registration = await isUserRegisteredToEvent(eid, user.uid)
                    setRegistered(registration)
                }
                const [year, month, day] = startDate.split('-');
                setYear(year)
                setMonth(month)
                setDay(day)
            }
        })()
    }, [eid, user, startDate])

    function goToEdit() {
        router.replace("/eventos/edit/" + eid);
    }

    const handleRegister = async (e) => {
        await registerUserToEvent(eid, user.uid)
        const registration = await isUserRegisteredToEvent(eid, user.uid)
        setRegistered(registration)
        router.reload()
    }

    const handleUnRegister = async (e) => {
        await unregisterUserFromEvent(eid, user.uid)
        const registration = await isUserRegisteredToEvent(eid, user.uid)
        setRegistered(registration)
        router.reload()
    }

    return (
        <div className="box-border *:before:*:after">
            <NavBar />
            {user && user.uid == organizer && (
                <div>
                    <div onClick={goToEdit}></div>
                </div>
            )}
            <div>
                <CardImageContainerinfo className='cardImageContainer flex w-full relative'>

                    <MuiBox>
                        <PictureSpaninfo className='pictureSpan m-0 p-0 absolute inset-0 box-border block overflow-hidden opacity-100 bg-left-top bg-repeat bg-scroll bg-auto bg-origin-padding bg-clip-border border-current border-solid border-0 border-image-none border-1 border-stretch border-100'>
                            <img alt={category} className='w-full h-full md:h-96 lg:h-128' sizes='100vw' src={image}
                                decoding="async" data-nimg="fill" />
                        </PictureSpaninfo>
                    </MuiBox>
                </CardImageContainerinfo>
            </div>
            <div className='grid grid-cols-1 divide-y-4 px-12 divide-blue-950'>
                <MainSection>
                    <SectionTitles>
                        <div className="mx-auto text-black text-5xl font-bold flex justify-center items-center w-full -ml-2 -mb-2">
                            {eventName} {user && user.uid == organizer && (
                                <img onClick={goToEdit} src="https://cdn-icons-png.flaticon.com/512/9265/9265782.png" className='h-[28px] w-auto relative ml-3' />
                            )}
                        </div>
                    </SectionTitles>

                    <div className="mt-1 mb-3 mx-auto text-black w-full flex-col pl-2">
                        <div className='mx-full'>
                            {location}
                        </div>
                        <div className='mx-full'>
                            {day}-{month}-{year} - {startTime}
                        </div>
                        <div className='mx-full'>
                            {organizerMail}
                        </div>
                    </div>

                    <div className="flex items-center justify-center ">
                        {user && registered == false && (
                            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-[280px] mt-3" onClick={handleRegister}>
                                Registrarse
                            </button>
                        )}
                        {user && registered == true && (
                            <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-[280px] mt-3" onClick={handleUnRegister}>
                                Cancelar Registro
                            </button>
                        )}
                    </div>
                </MainSection>
                <div className='py-16'>
                    <div className='font-bold text-3xl mb-2'>Detalles </div>
                    <div>{details}</div>
                </div>
                <div className='pt-16'>
                    <div className='font-bold text-3xl mb-4'>
                        Registrados
                        <span className='font-bold text-lg mb-4'> (Total: {attendees.length})</span>
                    </div>
                    {attendees && (
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                                <thead className='text-xs text-white uppercase bg-blue-700'>
                                    <tr>
                                        <th scope="col" className="px-6 py-3" >No.</th>
                                        <th scope="col" className="px-6 py-3">Nombre</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {attendees.map((item, index) => (
                                        <tr className='odd:bg-white  even:bg-gray-50 ' key={index}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-b">
                                                {index}
                                            </th>
                                            <td className="px-6 py-4  border-b">
                                                {item}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default infoEvents;