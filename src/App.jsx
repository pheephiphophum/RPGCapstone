import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SpaceShip from './components/Space-Ship'
import Stars from './components/Stars'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spaceship' element={<SpaceShip />} />
        <Route path='/stars' element={<Stars />} />
      </Routes>
      
    </>
  )
}

export default App
