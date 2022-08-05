import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './Sidebar.css';

function Sidebar({menu, showMenu, showLink, signin}) {

  return (
 
    <div className={`sidebar ${menu? "sidebar-active" : ""}`}>

        <div className='close-icon' onClick={showMenu}>
            <HiX />
        </div> 
        
        
        <div className='side-menu'>

            <NavLink to="/about" className='side-link'  style={{ textDecoration: 'none' }} onClick={showLink}>
                About
            </NavLink>
        
            <NavLink to="/booking" className='side-link' style={{ textDecoration: 'none' }} onClick={showLink}>
                Booking
            </NavLink>

            <NavLink to="/contact" className='side-link' style={{ textDecoration: 'none' }} onClick={showLink}>
                Contact
            </NavLink>

        </div>

        <div className='side-btn-wrap'>
        {!signin ?
            <NavLink to="/signin" className='side-btn' onClick={showLink}>
                 Sign Up
            </NavLink> :
            <NavLink to="/signin" className='side-btn' onClick={showLink}>
                Profile
        </NavLink>}
        </div>

    </div>
  );
}

export default Sidebar;