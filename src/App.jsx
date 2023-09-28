import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Overview from './componets/Overview'
import Services from './componets/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="overflow-hidden">
      <section>
        <Navbar/>
      </section>
      <secton>
        <Overview/>
      </secton>
      <section>
        <Services/>
      </section>
    </main>
  )
}

export default App
