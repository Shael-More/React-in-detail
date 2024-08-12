import React from 'react'
import Person from './Person'

function List({people}) {
  return (
  <>
  {people.map(person => {
    return <Person key={person.id} {...person}/>
  })}
  </>

  )
}

export default List