import React, { useState } from 'react'
import '../hojas-de-estilo/Form.css'
import { v4 as uuidv4 } from 'uuid';

function Form(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value)
    }

        const manejarEnvio = e => {
            e.preventDefault();
            e.target.reset()
        const tareaNueva = {
            id:uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);

    }
return (
    <form 
    className='tarea-form'
    onSubmit={manejarEnvio}
    >
        <input 
            className='tarea-input'
            type='text'
            placeholder='Write a task...'
            name='texto'
            onChange={manejarCambio}
            autoComplete='off'
        />
        <button className='tarea-boton'>
            Add task
        </button>
    </form>
)
}

export default Form