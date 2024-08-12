import React, { useState } from 'react';

function Form({ addPerson }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please Provide a value');
      return;
    }

    addPerson(name);
    setName('');
  };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          style={{ width: '100%' }}
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type='submit' className='btn-block btn'>
        Submit
      </button>
    </form>
  );
}

export default Form;
