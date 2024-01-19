import { useState } from 'react'
import { FormularioLogin } from './components/formulario-login.jsx'
import { Bienvenido } from './components/bienvenido.jsx'
import './App.css'

function App() {

  const [logeado, setLogeado] = useState(['', false])

  return (
    <>
      {
        !logeado[1]
          ? <FormularioLogin setLogeado={setLogeado}/>
          : <Bienvenido logeado={logeado} setLogeado={setLogeado}/>
      }
    </>
  )
}

export default App
