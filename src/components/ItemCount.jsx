import { useEffect, useState } from "react";
import './ItemCount.scss'

export default function ItemCount({stock}){

    const [count, setCount] = useState(1);

    function handleSumar(){
        if(count < stock){
            setCount(count + 1);
        }
    }

    function handleResta(){
        if(count > 1){
            setCount(count - 1);
        }
    }
    useEffect(() => {
            
        },[])

    return(
        <div className="contador">

            <div className="boton-suma-resta">
                <button onClick={handleResta} disabled={count <= 1} >-</button>
                <p>{count}</p>
                <button onClick={handleSumar} disabled={count >= stock} >+</button>
                
                
            </div>

            <button className="boton-agregarcarrito">Agregar al carrito</button>
        </div>
    )

}