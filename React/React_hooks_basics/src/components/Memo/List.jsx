import React from 'react'
import Person from './Person';
import { memo } from 'react';

function List ({people, removePerson}) {
  
  return (
    <div>
      {people.map((person) => {
       return <Person key={person.id} {...person} removePerson={removePerson}/>
      })}
    </div>
  )
}

export default memo(List); 