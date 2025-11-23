import './App.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCard from './components/ItemCard'


function App() {
  return (
    <>  
      <div className="header">
        <NavBar />
        
      </div>

      <ItemListContainer 
      bienvenida= "¡BIENVENIDOS A GATO NEGRO!"
      />
      
    </>
  )
} 

export default App
