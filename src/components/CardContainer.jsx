import { useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../data/firestore"

export default function CardContainer(props) {
    const {cart,removeItemFromCart} = useContext(cartContext)
    const [formData, setFormData] = useState({username:"" ,email: "", telefono: ""  })

    console.log(formData)

    function handleCheckout() {
        const buyOrder = {
            buyer : formData,
            items : cart,
            total : cart.reduce((total, item) => total + item.price * item.count, 0),
            date : new Date().toLocaleString()
        }

        createBuyOrder(buyOrder)
    }

    function handleSumit(event){
        event.preventDefault()

    }

    function handleChange(event){
        const {value, name} = event.target
        const newFormData = {...formData}
        newFormData[name] = value
        setFormData (newFormData)

    }

    function handleReset(){
        setFormData({username:"" ,email: "", telefono: ""  })
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

                

                <div className="checkout-form" >    
                    <form onSubmit={handleSumit}>

                        <label htmlFor="username">
                            Nombre de usuario:
                            <input onChange={handleChange} 
                            name="username" 
                            type="text" 
                            placeholder="Nombre Completo" 
                            value = {formData.username} 
                            />
                        </label>

                        <label htmlFor="email">
                            Correo electronico:
                            <input onChange={handleChange} 
                            name="email" 
                            type="email" 
                            placeholder="example@gmail.com"
                            value = {formData.email}
                            />
                            
                        </label>

                        <label htmlFor="telefono">
                            Telefono:
                            <input onChange={handleChange} 
                            name="telefono" 
                            type="text" 
                            placeholder="123456" 
                            value = {formData.telefono}
                            />
                        </label>

                        {cart.length > 0 ? (
                            <button onClick={handleCheckout}>Confirmar compra</button>
                        ) : (
                            <p>No hay productos para comprar.</p>
                        )}

                        <button onClick={handleReset} type="reset"></button>

                    </form>

                </div>
                
            </div>


        </div>  
    )
}

