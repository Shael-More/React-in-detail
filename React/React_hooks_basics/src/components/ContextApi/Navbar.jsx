import React, { createContext, useContext, useState } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

// custom hooks
export const useAppContext= () => useContext(NavbarContext)

function Navbar() {
  const [user, setUser] = useState({ name: 'bob' });

  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: 'BoB' });
  };
  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
