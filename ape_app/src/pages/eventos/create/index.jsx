import NavBar from '../../navbar/navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import ButtonGroup from '../../components/buttonGroup';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, collection, doc, Firestore, arrayUnion, addDoc, where, getDocs, query } from "firebase/firestore";
import { db, initFirebase } from "@/firebase/firebaseApp";
import { getEvents, createEvent, searchEventsWithUID } from '../../api/events';

const createEvents = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

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

    const testConsultaEventos = () => {
        searchEventsWithUID(user.uid);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEvent = await createEvent(eventData.name, eventData.category, eventData.startDate, eventData.startTime, eventData.endDate, eventData.location, user.uid, eventData.details);
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
        router.push('../eventos/info/' + newEvent.id)
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
    }, [loading]);

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
                            <button type='submit' onClick={handleSubmit}> Create Event </button>
                            <button type='button' onClick={handleCancel}>Cancel</button>
                            <button type='button' onClick={testConsultaEventos}>Eventos</button>
                        </ButtonGroup>

                    </form>
                </div>
            )}
        </div>
    )
}

export default createEvents;