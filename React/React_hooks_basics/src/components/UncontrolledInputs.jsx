import React from 'react';

function UncontrolledInputs() {
  const [value, setValue] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // const newUser = formData.get("name")

    const newUsers = Object.fromEntries(formData)
    setValue(value + 1)
    e.currentTarget.reset();
    console.log(newUsers)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Form Data API</h4>

      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default UncontrolledInputs;
