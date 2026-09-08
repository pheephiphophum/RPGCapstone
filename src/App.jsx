import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RoomOne from './components/RoomOne'
// import Navbar from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  // react router dom hooks
  // use | create = react hook
  // capital letter = component 


  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roomone' element={<RoomOne />} />
      </Routes>
    </>
  )
}

export default App
