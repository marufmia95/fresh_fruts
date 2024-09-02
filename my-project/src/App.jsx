import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'
import Banner from './components/Banners/Banner'
import Banner2 from './components/Banners/Banner2'

function App() {
 
  return (
    <>
     <main className='overflow-x-hidden bg-indigo-100'>
      <Navbar  />
      <Hero/>
      <Menus/>
      <Banner/>
      <Banner2></Banner2>
     </main>
    </>
  )
}

export default App
