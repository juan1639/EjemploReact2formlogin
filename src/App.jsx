import { useState } from 'react'
import { FormularioLogin } from './components/formulario-login'
import './App.css'

function App() {

  const [logeado, setLogeado] = useState('')

  return (
    <FormularioLogin 
    />
  )
}

export default App
