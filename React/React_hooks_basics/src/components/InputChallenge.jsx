import React, { useState } from 'react';
import { data } from '../data';

function InputChallenge() {
  const [name, setName] = useState('');
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUser = [...user, newUser];
    setUser(updatedUser);
    setName('');
  };

  const handleRemove = (id) => {
    const updatedUser = user.filter((person) => person.id !== id)
    setUser(updatedUser)
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>

        <div>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
      <h2>Users</h2>
      {user.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h5>{name}</h5>
            <button type='button' className='btn' onClick={() => handleRemove(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export default InputChallenge;
