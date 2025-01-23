import React from 'react'
// import Header from './Header'
import About from './About'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import ChicagoStory from './ChicagoStory'
import Footer from './Footer'

export default function HomePage() {
  return (
    <div className='Home-Container'>
        {/* <Header /> */}
        <About />
        <Specials  />
        <CustomersSay />
        <ChicagoStory />
        <Footer />
    </div>
  )
}
