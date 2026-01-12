import './App.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route, Link} from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'



function App() {

  // const [Page, setPage] = useState("home");

  return (
    <BrowserRouter>  

      <div className="header">
          <NavBar />
          
      </div>
        
      <Routes>

        <Route path="/" element={<ItemListContainer bienvenida= "¡BIENVENIDOS A GATO NEGRO!" />} />
        <Route path="/category/:categoryID" element={<ItemListContainer/>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
        <Route path="/producto/:itemID" element={<ItemDetailContainer/>} />


      </Routes>  

    </BrowserRouter>
  )
} 

export default App
