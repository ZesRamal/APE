import NavBar from '../../navbar/navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import ButtonGroup from '../../components/buttonGroup';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, collection, doc } from "firebase/firestore";
import { db, initFirebase } from "@/firebase/firebaseApp";


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
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        })
    }

    const handleCancel = () => {
        router.back()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <NavBar />
            {user && (
                <div className='flex flex-row'>
                    <form onSubmit={handleSubmit}>
                        <img src={getCategoryImage(eventData.category)}
                            alt='Category Image'
                            className='category-image
                    '/>
                        <label>
                            Nombre del Evento:
                            <input
                                type='text'
                                name='name'
                                value={eventData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Categoria:
                            <select name='category' value={eventData.category} onChange={handleChange}>
                                <option value="esports">Esports</option>
                                <option value="sports">Deportes</option>
                                <option value="academics">Asuntos Academicos</option>
                            </select>
                        </label>
                        <label>
                            Fecha de Inicio:
                            <input
                                type='date'
                                name='startDate'
                                value={eventData.startDate}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Fecha de termino:
                            <input
                                type='date'
                                name='endDate'
                                value={eventData.endDate}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                type='time'
                                name='startTime'
                                value={eventData.startTime}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Ubicacion:
                            <input
                                type='text'
                                name='location'
                                value={eventData.location}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Organizadores:
                            <input
                                type='text'
                                name='organizer'
                                value={eventData.organizer}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Detalles:
                            <textarea
                                name='details'
                                value={eventData.details}
                                onChange={handleChange}
                            />
                        </label>
                        <ButtonGroup>
                            <button type='submit'> Create Event </button>
                            <button type='button' onClick={handleCancel}>Cancel</button>
                        </ButtonGroup>

                    </form>
                </div>
            )}
        </div>
    )
}

export default createEvents;