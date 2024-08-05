import React from 'react';
import { data } from '../data';

function UseState() {
  const [people, setPeople] = React.useState(data);

  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <button type='button' onClick={() => handleRemove(id)}>
                remove
              </button>
            </div>
          );
        })}
        <button
          type='button'
          style={{ marginTop: '2rem', background: 'white', color: 'black' }}
          onClick={clearAll}
        >
          Clear all
        </button>
      </div>
    </>
  );
}

export default UseState;
