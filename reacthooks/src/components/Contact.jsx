import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const Contact = () => {
    const {phone, name}= useContext(AppContext)
  return (
    <div>
      <h2>Contact</h2>
      <h5>Phone: {phone}</h5>
      <h5>Name: {name}</h5>
     
    </div>
  );
}

export default Contact