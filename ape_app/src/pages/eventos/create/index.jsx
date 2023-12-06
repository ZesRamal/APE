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
import SectionTitles from '../../components/sectionTitles';

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
    }, []);


    return (
        <div>
            <NavBar >Nuevo evento</NavBar>
            <div className='mx-2'>
                <div className="text-[36px] sm:text-[24px] leading-5 text-black font-bold text-center my-10">
                    Crear Evento
                </div>
                <div className='mb-5'>
                    <label htmlFor="event-name">Nombre del evento</label>
                    <input
                        placeholder='Nombre del evento'
                        type="text"
                        name="eventName"
                        value={eventData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label >
                        Categoria:
                        <select name='input-field' value={eventData.category} onChange={handleChange} required>
                            <option value="">--Seleccione una opcion--</option>
                            <option value="esports">Esports</option>
                            <option value="sports">Deportes</option>
                            <option value="academics">Asuntos Academicos</option>
                            <option value="otros">Otros</option>
                        </select>
                    </label>
                </div>

                <div className="mb-5">
                    <label htmlFor="event-date">Fecha de inicio</label>
                    <input
                        type="date"
                        id="event-date"
                        name="eventDate"
                        value={eventData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="event-start-time">Hora de inicio</label>
                    <input
                        type="time"
                        id="event-start-time"
                        name="eventStartTime"
                        value={eventData.startTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="event-location">Agregar ubicación</label>
                    <input
                        placeholder='Ubicación'
                        type="text"
                        id="event-location"
                        name="eventLocation"
                        value={eventData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="event-organizers">Agregar organizadores</label>
                    <input
                        placeholder='Ej. Victor Rosa, Amalia Mendez'
                        type="text"
                        id="event-organizers"
                        name="eventOrganizers"
                        value={eventData.organizer}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="event-details">Detalles del evento</label>
                    <textarea
                        placeholder='Descripcion detallada del evento'
                        id="event-details"
                        name="eventDetails"
                        rows="4"
                        cols="50"
                        value={eventData.details}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-5">
                    <p>Foto de Portada:</p>
                    <input
                        type="file"
                        id="event-cover-image"
                        name="eventCoverImage"
                        value={eventData.eventCoverImage}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className=' text-center'>
                    <button type='submit' className='button-blue w-48 mx-[25%]' onClick={handleSubmit}> Crear Evento </button>
                    <button type='button' onClick={handleCancel} className='button-red w-48 mx-[25%]'>Regresar</button>
                </div>
            </div>
        </div>
    );
};

export default createEvents;