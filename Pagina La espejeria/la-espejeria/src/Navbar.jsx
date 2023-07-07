import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo-navbar">
            <img src="../src/assets/logo-removed-bg.png" alt="Logo La Espejeria" className='logo'/>
        </div>
        <div className="routes-navbar">
            <ul className="nav-links">
                <li><a href='/'>Home</a></li>
                <li><a href='/main-page'>Ir a la pagina principal</a></li>
                <li><a href='./instructions'>Ir a Instructions</a></li>
                <li><a href='/team'>Quienes somos?</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
