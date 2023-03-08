import React from 'react'
// import { Input } from '../input'

export const Form = () => {

    const handlerChange = (e) =>{
        console.log("handlerChange: ", e);
        
        if (e.target.value.lenght > 2) {
            console.log("Value: ", e.target.value);
        }

        
    }

    return (
        <form>
            <h1>Desde Formulario</h1>
            <input
            id='apellido' 
            name='apellido'
            onChange={(e) => handlerChange(e)}
            placeholder="Ingresar Apellido"
            />

        </form>
    )
}