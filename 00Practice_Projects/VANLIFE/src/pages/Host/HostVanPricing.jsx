import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
  const {currentVan} = useOutletContext();

  return (
    <div>
      {`$${currentVan.price}.00`}
      <span>/day</span>
    </div>
  );
}
