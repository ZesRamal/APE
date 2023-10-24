import NavBar from '../../navbar/navbar';
import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import ButtonGroup from '../../components/buttonGroup';

const createEvents = () => {
    const [eventData,setEventData] = useState({
        name: '',
        category: 'Esports',
        startDate: '',
        startTime: '',
        endDate: '',
        location: '',
        organizer: '',
        details: '',
    })

    const router = useRouter();

    const handleChange = (e) => {
        const {name, value} = e.target;
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

    }

    return (
        <div>
            <NavBar/>
            <div className='flex flex-row'>
                <form onSubmit={handleSubmit}>
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
                            <option value="games">Esports</option>
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
        </div>
    )
}

export default createEvents;