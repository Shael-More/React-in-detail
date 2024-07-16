import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function HostLayout() {
  const hostNavStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className='host-nav'>
        <NavLink
          to='.'
          end
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income'
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
        >
          Income
        </NavLink>
        
        <NavLink
          to='vans'
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
