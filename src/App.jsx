import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Overview from './componets/Overview'
import Services from './componets/Services'
import Booking from './componets/Booking'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="overflow-hidden">
      <section>
        <Navbar/>
      </section>
      <section>
        <Overview/>
      </section>
      <section>
        <Services/>
      </section>
      <section id='booking'>
        <Booking/>
      </section>
    </main>
  )
}

export default App
