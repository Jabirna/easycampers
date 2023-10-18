import react from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Overview from './componets/Overview'
import Services from './componets/Services'
import Booking from './componets/Booking'
import Contact from './componets/Contact'
import Footer from './componets/Footer'

function App() {
  return (
    <main className="overflow-hidden scroll-smooth">
      <section className='relative'>
        <Navbar/>
      </section>
      <section>
        <Overview/>
      </section>
      <section >
        <Services/>
      </section>
      <section id='booking'>
        <Booking/>
      </section>
      {/*missing Review section */}
      <section>
        <Contact/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default App
