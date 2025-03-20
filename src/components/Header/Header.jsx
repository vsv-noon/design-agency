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
          <li><NavLink>About</NavLink></li>
          <li><NavLink>Services</NavLink></li>
          <li><NavLink>Pricing</NavLink></li>
          <li><NavLink>Blog</NavLink></li>
        </ul>
        <Button text="Contact"/>
      </nav>
    </header>
  )
}

export default Header