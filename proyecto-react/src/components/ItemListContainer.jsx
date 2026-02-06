import './ItemListContainer.scss';
import ItemCard from './ItemCard';
import productos from '../data/Productos';
import { useState, useEffect } from 'react'
import { getData, getCategoryData } from "../data/firestore";
import { useParams } from 'react-router-dom';   

export default function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);

    const {categoryID} = useParams()

        
    useEffect(() => {
        
        if (categoryID) {
            getCategoryData(categoryID).then(respuesta => setProductos(respuesta));
        } else {
            getData().then(respuesta => setProductos(respuesta));
        }
    }, [categoryID]);

    return (
        <>
            <div className="mensaje-bienvenida">
                <h1>{props.bienvenida}</h1>
            </div>

            <div className="productos">
                {
                    productos.map(
                        (item) => <ItemCard
                            key={item.id}
                            {...item}
                            />
                    )
                }
                    
            </div>
        
        </> 
    )

}