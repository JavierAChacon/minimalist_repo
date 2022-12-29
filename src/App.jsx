import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <LandingPage/>
     {/* <About/> */}
    </div>
  )
}

export default App
