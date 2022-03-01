import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Button} from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {
  const [click, setClick]= useState(false)
  const [button, setButton]= useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu=() => setClick(false)

  const showBUtton=()=>{
    if(window.innerWidth<=960){
      setButton(false)
    } else{
      setButton(true)
    }
  }

  useEffect(()=>{
    showBUtton();
  }, []);

  window.addEventListener('resize', showBUtton)

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src="images/santedlogo.png" className='navbar-icon'></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Inicio</Link>
              </li>
              <li className='nav-item'>
                <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>Nosotros</Link>
              </li>
              <li className='nav-item'>
                <Link to='/servicios' className='nav-links' onClick={closeMobileMenu}>Servicios</Link>
              </li>
              <li className='nav-item'>
                <Link to='/proyectos' className='nav-links' onClick={closeMobileMenu}>Proyectos</Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/contact' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Contacto</Button>
                  </Link>
                ) :  (
                  <Link to='/contact' className='btn-link' onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline'
                            buttonSize='btn-mobile'
                    >Contacto</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>   
    </IconContext.Provider>
    </>
  )
}

export default Navbar