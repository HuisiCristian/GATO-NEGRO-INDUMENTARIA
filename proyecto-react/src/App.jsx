import './App.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route, Link} from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/cartContext'
import CardContainer from './components/CardContainer'
import {exportProductsToFirestore} from './data/firestore'



    

function App() {

  

  return (
    <BrowserRouter>  
      <CartProvider>

        <div className="header">
            <NavBar />
            
        </div>

        <button onClick={exportProductsToFirestore}>EXPORTAR</button>
          
        <Routes>

          <Route path="/" element={<ItemListContainer bienvenida= "¡BIENVENIDOS A GATO NEGRO!" />} />
          <Route path="/category/:categoryID" element={<ItemListContainer/>} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
          <Route path="/producto/:itemID" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CardContainer/>} />

        </Routes> 
        
      </CartProvider>

      

    </BrowserRouter>
  )
} 

export default App
