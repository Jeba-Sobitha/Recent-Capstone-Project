import React, { useState } from 'react'
import './HeaderStyles.css';
import logo from '../assets/logo.png';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
// import HomePage from './HomePage';
// import About from './About';
// import Specials from './Specials';
// import BookingPage from './BookingPage';

export default function Header() {
    const [isOpen, setOpen] = useState(false);

  return (
    <header>
        <section className='logo'>
          <Link to="/" ><img src={logo} alt="Little lemon Logo" /></Link>
        </section>
        <section className='hamburger'>
            <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            duration={0.5} />
        </section>
        <nav role="navigation" className={isOpen ? 'nav-menu open' : 'nav-menu'}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#menu">Menu</Link></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/#login">Login</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
            </ul>
        </nav>
        {/* Sections for Scrolling
      <div id="home"><HomePage /></div>
      <div id="about"><About /></div>
      <div id="specials"><Specials /></div>
      <div id="booking"><BookingPage /></div> */}
    </header>
  )
}
