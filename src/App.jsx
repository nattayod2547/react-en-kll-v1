import { useState } from 'react'

import './App.css'
import Navbarr from './components/Navbarr'
import Boxboyde from './components/Boxboyde'
import Aboutpag from './components/Aboutpag'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Navbarr/>
    


      <div className='mt-16'>
        <Boxboyde/>
        <Aboutpag/>
        <Contact/>
        
      </div>
      
    </>
  )
}

export default App
