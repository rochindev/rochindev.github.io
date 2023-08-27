import { useState } from 'react'
import Navbar from './sections/Navbar'
import './css/normalize.css'
import './css/App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {

  return (
    <>
      <Navbar />
      <div className='main'>
        <Hero />
        <About />
        <Experience />
        <Projects />  
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;