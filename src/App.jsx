import React from 'react'
import './index.css'
import { Navbar, LandingPage, About, Technologies, Projects, Contact } from './components'


function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
