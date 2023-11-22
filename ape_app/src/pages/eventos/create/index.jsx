import NavBar from '../../navbar/navbar';
import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import ButtonGroup from '../../components/buttonGroup';



const createEvents = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        eventCategory: 'Esports',
        eventDate: '',
        eventLocation: '',
        eventOrganizers: '',
        eventDetails: '',
        eventStartTime: '',
        eventCoverImage: null,
     });
  

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
     };

    const handleCancel = () => {
        router.back()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEventData({
          eventName: '',
        eventCategory: 'Esports',
        eventDate: '',
        eventLocation: '',
        eventOrganizers: '',
        eventDetails: '',
        eventStartTime: '',
        eventCoverImage: null,
     });
    }

     
    const getCategoryImage = (category) => {
      const categoryImages = {
          esports: 'esports.png',
          sports: 'sports.jpg',
          academics:'academics.jpg',
      } 
      return `../../images/${categoryImages[category]}`
      }


    return (
        <div >
          <NavBar >Nuevo evento</NavBar>
        
          <form onSubmit={handleSubmit}>
        
            <div className="input-field-blue">
              <label htmlFor="event-cover-image">Agregar foto de portada</label>
              <input
                type="file"
                id="event-cover-image"
                name="eventCoverImage"
                value={formData.eventCoverImage}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-field'>
              <label htmlFor="event-name">Nombre del evento</label>
                <input
                placeholder='nombre del evento'
                type="text"
                id="event-name"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
             />

            </div>
            <div className="input-field">
            <label >
              Categoria:
                  <select name='input-field'  type="string" id="event-category" onChange={handleChange} required>
                      <option value="">--Seleccione una opcion--</option>
                      <option value="esports">Esports</option>
                      <option value="sports">Deportes</option>
                      <option value="academics">Asuntos Academicos</option>
                      <option value="otros">Otros</option>
                  </select>
            </label>
            </div>
            <div className='container'>
              <div className="input-field">
              <label htmlFor="event-date">Fecha de inicio</label>
              <input
                type="date"
                id="event-date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
              </div>
              <div className="input-field">
              <label htmlFor="event-start-time">Hora de inicio</label>
              <input
                type="time"
                id="event-start-time"
                name="eventStartTime"
                value={formData.eventStartTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
            
            <div className="input-field">
                <label htmlFor="event-location">Agregar ubicación</label>
                <input
                placeholder='Ubicación'
                type="text"
                id="event-location"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
                required
             />
            </div>
            <div className="input-field">
              <label htmlFor="event-organizers">Agregar organizadores</label>
              <input
                placeholder='Ej. Victor Rosa, Amalia Mendez'
                type="text"
                id="event-organizers"
                name="eventOrganizers"
                value={formData.eventOrganizers}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="event-details">Detalles del evento</label>
              <textarea
                placeholder='Descripcion detallada del evento'
                id="event-details"
                name="eventDetails"
                rows="4"
                cols="50"
                value={formData.eventDetails}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className='container'>
              <button type='submit' className='button-blue'> Crear Evento </button>
              <button  type='button' onClick={handleCancel}className='button-red' c>Regresar</button>
            </div>
                    
          
          </form>
        </div>
     );
    };

export default createEvents;