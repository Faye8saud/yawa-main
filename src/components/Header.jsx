import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav className='header'>
    <div className='logo'>
      <img src={logo} alt="Logo" />
    </div>

    <div className='links'>
        <a href="">About</a>
        <a href="">Packages</a>
        <a href="">memberships</a>
        <a href="" id='btn'>book a class</a>
    </div>
  </nav>
  );
}

export default Header;