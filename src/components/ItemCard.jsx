
import './ItemCard.scss';
import { Link } from 'react-router';

export default function ItemCard(props){
    return(
        <>  
            <div className='card-productos'>
                <h2>{props.title}</h2>
                <img src={props.img}/>
                <h3>${props.price?.toLocaleString('es-AR')}</h3>
                {/* <p>{props.descripcion}</p> */}
                <Link to={`/producto/${props.id}`} className='boton-prodcutos'>
                    <button>Ver producto</button>
                </Link>

            </div>
        
        </>
    )

}

