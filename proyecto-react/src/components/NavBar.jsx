import CardWidget from './CardWidget';
import './NavBar.scss';
export default function NavBar(){
    return(
        <nav className='NavBar'>
            <a href="" className="logo">
                <img src="/gatonegro.jpg" alt="" />
            </a>

            <ul className="links-navbar">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            <CardWidget />
        </nav>
    )
}
