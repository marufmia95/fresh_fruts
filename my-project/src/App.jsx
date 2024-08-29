import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'

function App() {
 
  return (
    <>
     <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Menus/>
     </main>
    </>
  )
}

export default App
