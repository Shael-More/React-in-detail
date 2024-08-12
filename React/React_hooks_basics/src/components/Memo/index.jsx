import React, { useState, useCallback, useMemo } from 'react';
import { data } from '../../data';
import List from './List';
import slowFunction from './basic';

function LowerStateMemo() {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  
  const value = useMemo(() => slowFunction(), []) 

  console.log(value)
  const removePerson = useCallback(
    (id) => {
      const newPerson = people.filter((person) => person.id !== id);
      setPeople(newPerson);
    },
    [people]
  );

  return (
    <section>
      <button className='btn btn-block' onClick={() => setCount(count + 1)}>
        {' '}
        count : {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
}

export default LowerStateMemo;
