import { useState } from 'react'
import './formulario-login.css'

export const Bienvenido = ({logeado, setLogeado, cargando, setCargando}) => {

    const handleLogout = () => {

        if (cargando) return

        setCargando(true)
        console.log('cerrando la sesion...')

        setTimeout(() => {
            setCargando(false)
            console.log('sesion cerrada')
            setLogeado(['', false])
        }, 1800)
    }

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

                {!cargando && <button onClick={handleLogout}>Cerrar Sesión</button>}
                {cargando && <span className='loader'></span>}
            </div>
        </>
    )
}
