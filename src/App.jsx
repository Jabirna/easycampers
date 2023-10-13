import { useRef, useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Overview from './componets/Overview'
import Services from './componets/Services'
import Booking from './componets/Booking'
import Contact from './componets/Contact'


function App() {
  const bokref=useRef(null)

  return (
    <main className="overflow-hidden scroll-smooth">
      <section className='relative'>
        <Navbar/>
      </section>
      <section>
        <Overview ref={bokref}/>
      </section>
      <section>
        <Services/>
      </section>
      <section id='booking'>
        <Booking ref={bokref}/>
      </section>
      {/*Review section */}
      <section>
        <Contact/>
      </section>
    </main>
  )
}

export default App
