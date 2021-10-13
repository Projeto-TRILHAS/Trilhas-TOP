import React, { useState } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Logo
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
		  <li className='nav-item'>
            <Link to='/infotrilha' className='nav-links' onClick={closeMobileMenu}>
              Trilhas
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/dicas'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dicas Trilhas <i className='fas fa-caret-down' />
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link
              to='/ranking'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Ranking Trilhas
            </Link>
          </li>
        
          <li>

            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button/>
      </nav>
    </>
  );
}

export default Navbar;
