import { useState } from 'react'

export const FormularioLogin = () => {

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
            setCargando(false)
            console.log('sesion iniciada!')
        }, 2400)
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
    
            <button>Iniciar Sesión</button>
    
          </form>
        </>
    )
}
