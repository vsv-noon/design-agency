import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Logo />
        <ul className='nav-links'>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
        <Button text="Contact"/>
      </nav>
    </header>
  )
}

export default Header