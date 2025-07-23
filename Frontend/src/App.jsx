import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inventory from './component/Inventory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inventory />
    </>
  )
}

export default App
