import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';

export function loader() {
  return getVans()
}


export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const vans = useLoaderData() ;

  const typeFilter = searchParams.get('type');
  console.log(typeFilter);


  const displayfilteredVan = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayfilteredVan.map((van) => (
    <div key={van.id} className='van-tile'>
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        aria-label={`view details for ${van.name}, priced ar $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className='van-info'>
          <p>{van.name}</p>
          <p>
            ${van.price} <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }


  if (error) {
    return <h1 aria-live='assertive'>There was an error: {error.message}</h1>
  }

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list-filter-buttons'>
        <button
          onClick={() => handleFilterChange('type', 'simple')}
          className={`van-type simple ${
            typeFilter === 'simple' ? 'selected' : ''
          }`}
        >
          simple
        </button>
        <button
          onClick={() => handleFilterChange('type', 'rugged')}
          className={`van-type rugged ${
            typeFilter === 'rugged' ? 'selected' : ''
          }`}
        >
          rugged
        </button>
        <button
          onClick={() => handleFilterChange('type', 'luxury')}
          className={`van-type luxury ${
            typeFilter === 'luxury' ? 'selected' : ''
          }`}
        >
          luxury
        </button>

        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className='van-type clear-filters'
          >
            clear filter
          </button>
        ) : null}
      </div>

      <div className='van-list'>{vanElements}</div>
    </div>
  );
}
