import { useState ,forwardRef, useEffect } from 'react'
import { Axios } from "../../config";
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import './Contactanos.css'


const Contactanos = forwardRef((props, ref) => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    const [token, setToken] = useState('');
    const [respuestaExistosa, setResponseMessage] = useState('ENVIAR');
    const [loading, setLoading] = useState(false);
    const [exitoso, setExitoso] = useState(false)

    useEffect(() => {
    Axios.get('generar-token')
        .then(response => {
        setToken(response.data.token);
        })
        .catch(error => {
        console.error('Error al obtener el token:', error);
        });
    }, []);

    const onSubmit = async(data) => {
        try {
            setLoading(true)
            const totalData = {
                token,
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email,
                mensaje: data.mensaje,
            }
            const response = await Axios.post('enviar-correo', totalData)
            setLoading(false)
            setExitoso(true)
            setResponseMessage(response.data)
            reset();
        } catch (error) {
            alert(error.response.data);
            setLoading(false)
        }
    }

    useEffect(() => {
        if (respuestaExistosa) {
          const contador = setTimeout(() => {
            setResponseMessage('ENVIAR');
            setExitoso(false)
          }, 55000);
    
          return () => clearTimeout(contador);
        }
      }, [respuestaExistosa]);

    return (
    <section className='contacto-container' ref={ref}>
        <div className='contacto-formulario-content'>
          <h1>Contáctanos</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {loading && (
                  <div className='spinner'>
                    <ClipLoader size={50} color={"#fbb801"} loading={loading} />
                  </div>
                )}
                <div className='nombre-content'>
                  <input type="text" placeholder="Nombre" required {...register("nombre", {required:"El nombre es obligatorio"})}/>
                  <input type="text" placeholder="Apellido" required {...register("apellido", {required:"El apellido es obligatorio"})}/>
                </div>
                <input type="email" placeholder="Correo electrónico" required {...register("email", { required: 'El correo electrónico es obligatorio' })} />
                <textarea type="text" placeholder="Mensaje" required {...register('mensaje', { required: 'El mensaje es obligatorio' })}></textarea>
                <button type='submit' className={exitoso ? 'btn-verde' : 'btn-normal'}>{respuestaExistosa}</button>
            </form>
        </div>
    </section>
    )
})

export default Contactanos;