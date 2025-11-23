
import './ItemCard.scss';
export default function ItemCard(props){
    return(
        <>  
            <div className='card-productos'>
                <h2>{props.title}</h2>
                <img src={props.img}/>
                <h3>{props.price}</h3>
                <p>{props.descripcion}</p>

            </div>
        
        </>
    )

}