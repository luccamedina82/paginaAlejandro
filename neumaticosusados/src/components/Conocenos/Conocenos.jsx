import { forwardRef } from 'react'
import noticia1 from '../../assets/images/noticias/3.jpeg'
import noticia3 from '../../assets/images/noticias/gomeria.jpg'
import './Conocenos.css'

const Noticias = forwardRef((props, ref) => {
  return (
    <section>
        <div className='noticias-container' ref={ref}>
            <h1>Conócenos</h1>
            <div className='noticia-content'>
                <div className='column-noticia'>
                    <div className='novedad-body'>
                        <h2>¿Quiénes somos?</h2>
                        <p>Neumáticos Usados donde 30 años de trayectoria nos respaldan, donde la tradición familiar se une a la excelencia. Cada neumático es una promesa de seguridad y rendimiento, inspeccionado rigurosamente para su tranquilidad en la carretera.
                            Visítenos y únase a la familia de Neumáticos Usados. Aquí, cada cliente es fundamental y cada viaje, importante. Su confianza, nuestra historia.
                        </p>
                    </div>
                    <div className='novedad-body-img'>
                        <img src={noticia1} alt="" />
                    </div>
                </div>
                <div className='column-noticia1'>
                    <div className='novedad-body-img'>
                        <img src={noticia3} alt="" />
                    </div>
                    <div className='novedad-body'>
                        <h2>¿Por qué usado?</h2>
                        <p>Muchas personas y empresas necesitan cambiar neumáticos, a menudo descartando aquellos con vida útil. En Neumáticos Usados Córdoba, ofrecemos neumáticos de calidad con un 50% de vida útil a solo un 10% del precio de uno nuevo, lo que representa un gran ahorro, especialmente para neumáticos grandes. Usar neumáticos usados también ayuda a reducir la contaminación. Si busca ahorrar dinero en el recambio de neumáticos, somos su mejor opción.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
})

export default Noticias