
import { createContext , useState ,useEffect} from "react";

const cartContext = createContext({cart: []});

const DefaultContextProvider = cartContext.Provider;

export function CartProvider({children}) {

    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem("cartGatoNegro");
        return localData ? JSON.parse(localData) : [];
    });

    // Cada vez que el carrito cambie, lo guardamos automáticamente
    useEffect(() => {
        localStorage.setItem("cartGatoNegro", JSON.stringify(cart));
    }, [cart]);

    function addItemToCart(item, count) {

        const newCart = structuredClone(cart);
        const indexFound = newCart.findIndex(cartItem => cartItem.id === item.id);

        if (indexFound !== -1) {
            newCart[indexFound].count += count;
        } else {
            newCart.push({ ...item, count: count });
        }

        setCart(newCart);
    }

    function removeItemFromCart(idRemove) {
        const newCart = cart.filter(item => item.id !== idRemove);
        setCart(newCart);
    }

    function clearCart() {
        setCart([]);
    }

    function countItemsInCart() {
        let total=0;
        cart.forEach(item => total += item.count);
        return total
    }

    function countTotalPrice() {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.count;
        });
        return total;
    }

    return(
        <DefaultContextProvider value={{cart: cart , addItemToCart, removeItemFromCart, countItemsInCart}}>
            {children}
        </DefaultContextProvider>
    )
}

export default cartContext

