import NavBar from '../../navbar/navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import ButtonGroup from '../../components/buttonGroup';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, collection, doc, Firestore, arrayUnion, addDoc, where, getDocs, query, getDoc } from "firebase/firestore";
import { db, initFirebase } from "@/firebase/firebaseApp";
import { getEvent, createEvent, searchEventsWithUID, changeEventInfo, deleteEvent } from '../../api/events';

const createEvents = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const {
        query: { eid },
    } = router;

    const [eventData, setEventData] = useState({
        name: '',
        category: 'Esports',
        startDate: '',
        startTime: '',
        endDate: '',
        location: '',
        organizer: '',
        details: '',
    })

    useEffect(() => {
        ; (async () => {
            if (!eid) return false;
            const event = await getEvent(eid);
            if (!event) {
                router.push('/eventos')
            } else {
                setEventData({
                    name: event.name,
                    category: event.category,
                    startDate: event.startDate,
                    endDate: event.endDate,
                    startTime: event.startTime,
                    location: event.location,
                    details: event.details,
                    organizer: event.organizer,
                })
            }
        })()
    }, [eid, user])

    const handleChange = (e) => {
        const { id, value } = e.target;
        setEventData({
            ...eventData,
            [id]: value,
        })
    }

    const handleCancel = () => {
        router.back()
    }

    const handleBorrar = () => {
        deleteEvent(eid)
        router.push("/")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await changeEventInfo(eid, eventData.name, eventData.category, eventData.startDate, eventData.startTime, eventData.endDate, eventData.location, eventData.details);
        setEventData({
            name: '',
            category: 'Esports',
            startDate: '',
            endDate: '',
            startTime: '',
            location: '',
            details: '',
            organizer: '',
        })
        router.push('../info/' + eid)
    }

    const getCategoryImage = (category) => {
        const categoryImages = {
            esports: 'esports.png',
            sports: 'sports.jpg',
            academics: 'academics.jpg',
        }
        return `../../images/${categoryImages[category]}`
    }

    useEffect(() => {
        if (!user && !loading) {
            router.push("/")
        }
        if (user && (eventData.organizer != "")) {
            if (user.uid != eventData.organizer) {
                router.push("/eventos/info/" + eid)
            }
        }
    }, [loading, user, eventData]);

    return (
        <div>
            <NavBar />
            {user && (
                <div className='flex flex-row'>
                    <form onSubmit={handleSubmit} >
                        <img src={getCategoryImage(eventData.category)}
                            alt='Category Image'
                            className='category-image
                    '/>
                        <label>
                            Nombre del Evento:
                            <input
                                type='text'
                                id='name'
                                value={eventData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Categoria:
                            <select id='category' value={eventData.category} onChange={handleChange}>
                                <option value="esports">Esports</option>
                                <option value="sports">Deportes</option>
                                <option value="academics">Asuntos Academicos</option>
                            </select>
                        </label>
                        <label>
                            Fecha de Inicio:
                            <input
                                type='date'
                                id='startDate'
                                value={eventData.startDate}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Fecha de termino:
                            <input
                                type='date'
                                id='endDate'
                                value={eventData.endDate}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                type='time'
                                id='startTime'
                                value={eventData.startTime}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Ubicacion:
                            <input
                                type='text'
                                id='location'
                                value={eventData.location}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Organizadores:
                            <input
                                type='text'
                                id='organizer'
                                value={eventData.organizer}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Detalles:
                            <textarea
                                id='details'
                                value={eventData.details}
                                onChange={handleChange}
                            />
                        </label>
                        <ButtonGroup>
                            <button type='submit' onClick={handleSubmit}> Guardar Cambios </button>
                            <button type='button' onClick={handleCancel}>Cancelar</button>
                            <button type='button' onClick={handleBorrar}>Borrar Evento</button>
                        </ButtonGroup>

                    </form>
                </div>
            )}
        </div>
    )
}

export default createEvents;