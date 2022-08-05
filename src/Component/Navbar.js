import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { FiLogIn } from 'react-icons/fi';
import { CgProfile } from "react-icons/cg";
import './Navbar.css';

function Navbar ({showMenu, signin}) {

  return (
      <div className='nav'>
        <div className='nav-container'>
        
          <Link to="/" className='nav-logo' style={{ textDecoration: 'none' }}>
          Camp
          </Link>

            <div className='nav-icon' onClick={showMenu}>
              <HiMenu />
            </div>

            <div className='nav-menu'>
              
              <NavLink to="/about" className='nav-link' activeClassName="is-active" style={{ textDecoration: 'none' }}>
                About
              </NavLink>
          
              <Link to="/booking" className='nav-link' activeClassName="is-active" style={{ textDecoration: 'none' }}>
                Booking
              </Link>

              <NavLink to="/contact" className='nav-link' activeClassName="is-active" style={{ textDecoration: 'none' }}>
                Contact
              </NavLink>

              <NavLink to="/signin" className='nav-btn nav-link'>
              {signin ? <CgProfile /> :
              <FiLogIn />}
              </NavLink>
              

            </div>
            

        </div>
      </div>
  );
}

export default Navbar;

