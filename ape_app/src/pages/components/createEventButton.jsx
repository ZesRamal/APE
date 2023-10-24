import React from 'react';

const CreateEventButton = () => {
    return(
        <a className="inline-flex text-white text-[1.6rem] justify-center align-middle relative box-border outline-0 border-spacing-0 m-0 cursor-pointer select-none no-underline font-sans font-medium leading-7 tracking-tight min-w-[64px] px-8 py-2 rounded-md transition bg-color-250 shadow-250 border-color-250 text-color-250 ease-in-out duration-250 bg-blue-500 shadow-md tabindex-0" href='/eventos/create'>
            Crear Evento
            <span className='overflow-hidden pointer-events-none absolute z-0 inset-0 rounded-[inherit]'>
                
            </span>
        </a>
    );
}; 

export default CreateEventButton;