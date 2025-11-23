import './App.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>  
      <div className="header">
        <NavBar />
        <ItemListContainer />
      </div>
    </>
  )
} 

export default App
