import { useState } from 'react';
import Menu from './Menu/Menu';
import autito from '../../assets/images/logoenblanco.png'
import iconoMenu from '../../assets/images/menu.png'
import iconoCerrar from '../../assets/images/cerrar.png'
import './Navbar.css'
const Navbar = ({refs}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    const handleScroll = (ref) => {
        
        if (ref && ref.current) {
            const offsetTop = ref.current.offsetTop
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

  return (
    <>
        <Menu isOpen={openMenu} toggleMenu={toggleMenu} refs={refs}/>
        <div className='nav-container'>

            <div className='nav-content'>
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

                <button className='menu-btn' onClick={toggleMenu}>
                    <img src={openMenu ? iconoCerrar : iconoMenu} style={{ width: "1.5rem", height: "1.5rem" }} />
                </button>
            </div>
        </div>
    </>
  )
}

export default Navbar