import React from 'react'
import './index.css'
import { Navbar, LandingPage, About, Technologies } from './components'



function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Technologies />
    </div>
  )
}

export default App
