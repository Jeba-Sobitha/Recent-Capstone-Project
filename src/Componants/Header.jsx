import React, { useState } from 'react'
import './HeaderStyles.css';
import logo from '../assets/logo.png';
import Hamburger from 'hamburger-react';

export default function Header() {
    const [isOpen, setOpen] = useState(false);

  return (
    <header>
        <div className='logo'>
        <img src={logo} alt="Little lemon Logo" />
        </div>
        <div className='hamburger'>
            <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            duration={0.5} />
        </div>
        <nav className={isOpen ? 'nav-menu open' : 'nav-menu'}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#order-online">Order-Online</a></li>
            </ul>
        </nav>
    </header>
  )
}
