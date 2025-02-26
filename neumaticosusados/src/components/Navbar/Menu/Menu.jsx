import autito from '../../../assets/images/logoenblanco.png'
import './Menu.css'

const Menu = ({isOpen, toggleMenu, refs}) => {
    
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
    <>
        <div className={`menu ${isOpen ? "active": ""}`} onClick={toggleMenu}>
            <div className='menu-container'>
                <a onClick={() =>window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <img src={autito} className='logo' />
                </a>

                <ul>
                    <li>
                        <a onClick={() =>handleScroll(refs.encontranosRef)} className="menu-item">Encontranos</a>
                    </li>
                    <li>
                        <a onClick={() =>handleScroll(refs.conocenosRef)} className="menu-item">Conócenos</a>
                    </li>
                    <li>
                        <a onClick={() =>handleScroll(refs.reseniasRef)} className="menu-item">Reseñas</a>
                    </li>
                    <li>
                        <a onClick={() =>handleScroll(refs.contactanosRef)} className="menu-item">Contactanos</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Menu