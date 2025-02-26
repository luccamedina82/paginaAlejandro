import { forwardRef } from 'react'
import Maps from './GoogleMaps/GoogleMaps.jsx'
import './Informacion.css'

const Informacion = forwardRef((props, ref) => {
  const refContactanos = props.refContactanos

  const handleScroll = (ref) => {
        
    if (ref && ref.current) {
        const offsetTop = ref.current.offsetTop + 50
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }
}
  return (
    <section className='informacion-container' ref={ref}>
        <h1>¡Renova tu camino con nosotros!</h1>
        <div className='informacion-content'>
          <div className='column'>
            <div className='item-content'>
              <Maps/>
              <h2>Ubicación</h2>
              <p className='informacion-ubicacion'>Río Negro 1228 esquina Perú, Bº Parque San Francisco, Córdoba, Argentina.</p>
            </div>
          </div>

          <div className='column'>

            <div className='contacto-content'>
              <div className='mail-content' onClick={()=> handleScroll(refContactanos)}>
                <a>Envíanos un mensaje</a>
              </div>
              <div className='numero-content'>
                <h2>Teléfono</h2>
                <p className="telefono">(0351) 155-946508 / (0351) 4806998</p>
              </div>
            </div>
          </div>
        </div>
        <div className='atencion'>
          <h2>Horarios de atención</h2>
          <p>De Lunes a Viernes de 10:00 a 19:00 hs.
              Sábados de 9 a 13:30.</p>
        </div>
    </section>
  )
})

export default Informacion
