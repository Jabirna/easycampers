import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-md:p-3 p-6 overflow-hidden">
      <Navbar/>
    </div>
  )
}

export default App
