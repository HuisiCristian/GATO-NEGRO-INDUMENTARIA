import './ItemDetailContainer.scss'
import { useParams } from 'react-router-dom'
import { getItemData } from '../data/mockService'
import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const {itemID} = useParams()

    useEffect(() => {
        getItemData(itemID).then(response => setProducto(response))
    }, [itemID])

    
    return (
        <section className='item-detail-container'>

            <h2>{producto.title}</h2>
            <img src={producto.img} alt={producto.title} />
            <p>{producto.descripcion}</p>
            <h4>{producto.price?.toLocaleString('es-AR')}</h4>
            <ItemCount stock={producto.stock} />
        </section>
    )
}

export default ItemDetailContainer