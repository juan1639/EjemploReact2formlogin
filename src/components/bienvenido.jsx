import { useState } from 'react'
import './formulario-login.css'

export const Bienvenido = ({logeado, setLogeado}) => {

    return (
        <>
            <div className='formulario'>

                <h1>Sesion Iniciada</h1>
                <h1 className='msgBienvenida'>Bienvenido {logeado}</h1>

                <span className='avatar'>
                    <section className='cara'>
                        <span className='ojos'></span>
                        <span className='ojos'></span>
                    </section>

                    <section className='cara'>
                        <span className='boca'></span>
                    </section>
                </span>

                <button onClick={() => setLogeado('', false)}>Cerrar Sesión</button>
            </div>
        </>
    )
}
