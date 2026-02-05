import './ItemDetailContainer.scss'
import { useParams } from 'react-router-dom'
import { getItemData } from '../data/firestore'
import { getData } from '../data/firestore'
import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import cartContext from '../context/cartContext'


function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const {itemID} = useParams()
    const {addItemToCart, removeItemFromCart} =useContext(cartContext)

    function onAddToCart(count) {
        console.log(`Agregaste ${count} ${producto.title} al carrito`)
        addItemToCart(producto, count)
    }

    useEffect(() => {
    if (itemID) {
        // Usamos getItemData directamente pasándole el ID de la URL
        getItemData(itemID).then(respuesta => {
            if (respuesta) {
                setProducto(respuesta);
            }
        });
    }
}, [itemID]); 

    console.log("Producto actual en estado:", producto);
    return (
        <section className='item-detail-container'>
            <div className="col-info">
                <h2>{producto.title}</h2>
                <img src={producto.img} alt={producto.title} />
                <h4>${producto.price?.toLocaleString('es-AR')}</h4>
                <p>{producto.descripcion}</p>
            </div>

            <div className="agregar-carrito">
                <ItemCount stock={producto.stock} className="item-count" onAddToCart={onAddToCart} />

                <button onClick={() => removeItemFromCart(producto.id)}> Eliminar</button>
            </div>
        </section>
    )
}

export default ItemDetailContainer
