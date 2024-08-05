import avatar from '../assets/avatar.svg';

import { people } from '../data';
import React from 'react';

export default function List() {
  return (
    <>
      <h1>List of Persons</h1>
      {people.map((person) => {
        const { name, nickname = "ShakeAndBake", images } = person;
        const img = images?.[0]?.small?.url ?? avatar
        return (
          <div key={name}>
            <img src={img} alt={name} style={{width: "50px", borderRadius: '50px'}}/>
            <h4>{name}</h4>
            <h5>Nickname: {nickname}</h5>
          </div>
        );
      })}
    </>
  );
}
