import CardWidget from './CardWidget';
import './NavBar.scss';
import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return(
        <nav className='NavBar'>
            <NavLink to="/" className="logo">
                <img src="/assets/LOGO2.png" alt="" />
            </NavLink>

            <ul className="links-navbar">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/category/Remeras">Remeras</NavLink></li>
                <li><NavLink to="/category/Bermudas">Bermudas</NavLink></li>
                <li><NavLink to="/category/Gorras">Gorras</NavLink></li>
            </ul>

            <CardWidget />
        </nav>
    )
}

