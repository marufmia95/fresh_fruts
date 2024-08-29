import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'
import Banner from './components/Banners/Banner'

function App() {
 
  return (
    <>
     <main className='overflow-x-hidden bg-indigo-200'>
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banner/>
     </main>
    </>
  )
}

export default App
