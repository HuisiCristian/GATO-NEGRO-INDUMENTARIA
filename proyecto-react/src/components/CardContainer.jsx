import { useContext } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../data/firestore"

export default function CardContainer(props) {
    const {cart,removeItemFromCart} = useContext(cartContext)

    function handleCheckout() {
        const buyOrder = {
            buyer : "Gato Negro",
            items : cart,
            total : cart.reduce((total, item) => total + item.price * item.count, 0),
            date : new Date().toLocaleString()
        }

        createBuyOrder(buyOrder)
    }


    return (
        <div>

            <div className="card-container">
                <h1>Tu Carrito</h1>
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.title} - ${item.price} x {item.count}
                                
                                <button onClick={() => removeItemFromCart(item.id)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {cart.length > 0 ? (
                    <button onClick={handleCheckout}>Confirmar compra</button>
                ) : (
                    <p>No hay productos para comprar.</p>
                )}
        </div>

        </div>
    )
}

