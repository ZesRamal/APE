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
        image: '',
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
        let url = ""
        switch (eventData.category) {
            case "esports":
                url = "https://www.iebschool.com/blog/wp-content/uploads/2020/09/invertir-en-eSports.jpg"
                break;
            case "sports":
                url = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/1200px-Sport_balls.svg.png"
                break;
            case "academics":
                url = "https://www.ensenada.tecnm.mx/wp-content/gallery/tendencia-valle-2023/P1340350.jpg"
                break;

            default:
                url = "https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png"
                break;
        }
        const newEvent = await createEvent(eventData.name, eventData.category, eventData.startDate, eventData.startTime, eventData.location, user.uid, eventData.details, url);
        setEventData({
            name: '',
            category: 'Esports',
            startDate: '',
            startTime: '',
            location: '',
            details: '',
            organizer: '',
            image: '',
        })
        router.push('../eventos/info/' + newEvent.id)
    }

    return (
        <div>
            <NavBar />
            {user && (
                <div className='mx-2'>
                    <div className="text-[36px] sm:text-[24px] leading-5 text-black font-bold text-center my-10">
                        Crear Evento
                    </div>
                    <div className='mb-5'>
                        <label>Nombre del evento:</label>
                        <input
                            placeholder='Nombre del evento'
                            type="text"
                            id="name"
                            value={eventData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label >
                            Categoria:
                            <select id='category' value={eventData.category} onChange={handleChange}>
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
                            id="startDate"
                            value={eventData.startDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="event-start-time">Hora de inicio</label>
                        <input
                            type="time"
                            id="startTime"
                            value={eventData.startTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="event-location">Agregar ubicación</label>
                        <input
                            placeholder='Ubicación'
                            type="text"
                            id="location"
                            value={eventData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label>Detalles del evento</label>
                        <textarea
                            placeholder='Descripcion detallada del evento'
                            id="details"
                            value={eventData.details}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    {/* <div className="mb-5">
                        <p>Foto de Portada:</p>
                        <input
                            type="file"
                            id="image"
                            value={eventData.image}
                            onChange={handleChange}
                        />
                    </div> */}

                    <div className=' text-center'>
                        <button type='submit' className='button-blue w-48 mx-[25%]' onClick={handleSubmit}> Crear Evento </button>
                        <button type='button' onClick={handleCancel} className='button-red w-48 mx-[25%]'>Regresar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default createEvents;