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
        await changeEventInfo(eid, eventData.name, eventData.category, eventData.startDate, eventData.startTime, eventData.location, eventData.details, url);
        setEventData({
            name: '',
            category: 'Esports',
            startDate: '',
            startTime: '',
            location: '',
            details: '',
            organizer: '',
        })
        router.push('../info/' + eid)
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
                <div className='mx-2'>
                    <div className="text-[36px] sm:text-[24px] leading-5 text-black font-bold text-center my-10">
                        Modificar Evento
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

                    <div className=' text-center'>
                        <button type='submit' className='button-green w-48 mx-[25%] h-auto' onClick={handleSubmit}> Guardar </button>
                        <button type='button' onClick={handleCancel} className='button-blue w-48 mx-[25%]'>Regresar</button>
                        <button type='submit' className='button-red w-48 mx-[25%]' onClick={handleBorrar}> Borrar Evento </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default createEvents;