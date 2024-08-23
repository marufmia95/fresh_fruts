import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
 
  return (
    <>
     <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
     </main>
    </>
  )
}

export default App
