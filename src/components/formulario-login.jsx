import { useState } from 'react'
import './formulario-login.css'

export const FormularioLogin = ({setLogeado}) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(false)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()

        console.log('submit')

        if ([user, pass].includes('')) {
            setError(true)
            console.log('error! campo vacio...')
            return
        }

        setError(false)
        setCargando(true)
        console.log('cargando...')

        setTimeout(() => {
            setLogeado([user, true])
            setCargando(false)
            console.log('sesion iniciada!')
        }, 2800)
    }

    return (
        <>
          <form
            className='formulario'
            onSubmit={handleSubmit}
          >
    
            <h1>Iniciar Sesión</h1>
    
            <input 
                type="text"
                name="usuario"
                placeholder='Usuario...'
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />

            <input 
                type="password"
                name="password"
                placeholder='Password...'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
    
            {!cargando && <button>Iniciar Sesión</button>}
            {cargando && <span className='loader'></span>}
          </form>
        </>
    )
}
