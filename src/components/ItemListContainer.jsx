import './ItemListContainer.scss';
import ItemCard from './ItemCard';

export default function ItemListContainer(props) {
    return (
        <>
        <div className="mensaje-bienvenida">
            <h1>{props.bienvenida}</h1>
        </div>

        <div className="productos">
            <ItemCard 
            img= "./src/assets/AGUILA1.jpg"
            title= "Remera Oversize Aguila"
            price= "$24.000"
            descripcion= "Algodón peinado 20/1. Cuello ribb. No destiñe, ni achica con los lavados"
            />

            <ItemCard  
            img= "./src/assets/FLOWER1.jpg"
            title= "Remera Oversize Flower"
            price= "$24.000"
            descripcion= "Algodón peinado 20/1. Cuello ribb. No destiñe, ni achica con los lavados"
            />

            <ItemCard  
            img= "./src/assets/BOSTON1.jpg"
            title= "Remera Oversize Boston"
            price= "$24.000"
            descripcion= "Algodón peinado 20/1. Cuello ribb. No destiñe, ni achica con los lavados"
            />

            <ItemCard  
            img= "./src/assets/ANGELES1.jpg"
            title= "Remera Oversize Los Angeles"
            price= "$24.000"
            descripcion= "Algodón peinado 20/1. Cuello ribb. No destiñe, ni achica con los lavados"
            />

            <ItemCard  
            img= "./src/assets/VICTORY1.jpg"
            title= "Remera Oversize Victory"
            price= "$24.000"
            descripcion= "Algodón peinado 20/1. Cuello ribb. No destiñe, ni achica con los lavados"
            />

            <ItemCard  
            img= "./src/assets/WHATEVER1.jpg"
            title= "Remera Oversize Whatever"
            price= "$24.000"
            descripcion= "Algodón peinado 20/1. Cuello ribb. No destiñe, ni achica con los lavados"
            />
                
        </div>
        
    </> )
}