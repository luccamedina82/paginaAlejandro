import Navbar from './components/Navbar/Navbar'
import React from 'react'
import PrimeraVista from './components/PrimeraVista/PrimeraVista.jsx'
import Informacion from './components/Informacion/Informacion.jsx'
import Conocenos from './components/Conocenos/Conocenos.jsx'
import Whatsapp from './components/WhatsAppButton/WhatsAppButton.jsx'
import Contactanos from './components/Contactanos/Contactanos.jsx'
import Resenias from './components/Resenias/Resenias.jsx'

import './index.css'
import './App.css'
import { useRef } from 'react';
const App = () => {
  const encontranosRef = useRef(null)
  const reseniasRef = useRef(null)
  const conocenosRef = useRef(null)
  const contactanosRef = useRef(null)
  return (
    <>
        <Navbar refs={{encontranosRef, reseniasRef, conocenosRef, contactanosRef}}/>
        <Whatsapp/>

      <div className='container'>
          <PrimeraVista/>
          <Informacion ref={encontranosRef} refContactanos={contactanosRef}/>
          <Conocenos ref={conocenosRef}/>
          <Resenias ref={reseniasRef}/>
          <Contactanos ref={contactanosRef}/>

      </div>

    </>
  )
}

export default App