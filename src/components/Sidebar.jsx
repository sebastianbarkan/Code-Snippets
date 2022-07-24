import React from 'react';
import {FaPlusCircle, FaSearch, FaLayerGroup, FaCog, FaSignOutAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Sidebar() {


  return (
      <>
        <section className='sidebar-container'>
                <div className='top-links'>
                    <Link to='/'><FaLayerGroup  id='firstSidebarItem' className='sidebar-icon sidebar-item'/> </Link>
                    <Link to='/createsnippet'><FaPlusCircle className='sidebar-icon sidebar-item'/></Link>
                    <Link to='/searchsnippets'><FaSearch className='sidebar-icon sidebar-item'/></Link>
                </div>

                <div className='bottom-links'>
                    <FaCog className='sidebar-icon sidebar-item'/>
                    <Link to='/login' className='sidebar-item'>Login</Link>
                    <FaSignOutAlt id='lastSidebarItem' className='sidebar-icon sidebar-item'/>
                </div>
        </section>
      </>
  );
}

export default Sidebar;
