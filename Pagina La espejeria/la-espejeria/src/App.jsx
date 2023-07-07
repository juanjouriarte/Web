import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cuadro from './cuadro.jsx'
import Navbar from './Navbar.jsx'
import FrameImage from './Frame.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>La Espejeria</h1>
      <Cuadro />
      <FrameImage />
    </>
  )
}

export default App
