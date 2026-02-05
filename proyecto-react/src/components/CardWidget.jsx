
import './CardWidget.scss';
import { useContext } from 'react';
import cartContext   from '../context/cartContext';
import { NavLink } from 'react-router-dom';

export default function CardWidget() {

    const {countItemsInCart} = useContext(cartContext)
    return (
        <div className="carrito">
            
            <NavLink to="/cart">
                🛒 ({countItemsInCart()})
            </NavLink>
        </div>
    )
}