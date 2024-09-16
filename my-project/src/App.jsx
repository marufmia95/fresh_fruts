import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banner from './components/Banners/Banner';
import Banner2 from './components/Banners/Banner2';
import Banner3 from './components/Banners/Banner3';
import Fotter from './components/Footer/Fotter';

function App() {
  return (
    <>
     <main className='overflow-x-hidden bg-indigo-100'>
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Fotter/>
     </main>
    </>
  )
}
export default App;
