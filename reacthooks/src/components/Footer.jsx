import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const Footer = () => {
  const {phone} = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <h5>Phone: {phone}</h5>
      
    </div>
  );
}

export default Footer