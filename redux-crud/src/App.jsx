import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { Routes , Route} from "react-router-dom"
import Read from './components/Read'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Create />} />
      <Route exact path='/read' element={<Read />} />
      <Route exact path='/edit/:id' element={<Update />} />
    </Routes>
    test
   </div>
  )
}

export default App
