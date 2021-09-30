import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        
          <i className='fab fa-firstdraft' />
        </Link> */}
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
            <Link to='/trilhainformation' className='nav-links' onClick={closeMobileMenu}>
              Trilhas
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/dicastrilhas'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dicas de Trilhas 
            </Link>
           
          </li>
          <li className='nav-item'>
            <Link
              to='/trilhas_favoritas'
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
             Menú
            </Link>
          </li>
          
        </ul>
        <Button texto={"User"} />
      </nav>
    </>
  );
}

export default Navbar;
