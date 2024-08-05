import React, { useState } from 'react'

function MultipleInput() {
    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users);  
    }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Multiple Inputs</h3>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={users.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={users.email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={users.password}
          onChange={handleChange}
          name="password"
        />
      </div>

      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  );
}

export default MultipleInput