import React, { useState } from 'react'
import Form from './Form'
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea.jsx'

function ListaDetareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareaActualizada = [tarea, ...tareas]
            setTareas(tareaActualizada);
        }
    }

    const eliminarTarea = id => {
        const tareaActualizada = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareaActualizada);
    }

    const completarTarea = id => {
        const tareaActualizada = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea;
        });
        setTareas(tareaActualizada);
    }

    

return (
    <>
        <Form onSubmit={agregarTarea}/>
        <div className='tareas-lista-container'>
            {
                tareas.map((tarea) => 
                <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada} 
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
                />
                )
            }
        </div>
    </>
)
}

export default ListaDetareas



