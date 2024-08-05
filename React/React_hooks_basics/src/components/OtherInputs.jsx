import React, { useState } from 'react';

const frameworks = ['react', 'angular', 'vue', 'svelte']

function OtherInputs() {
    const [shipping, setShipping] = useState(false)
    const [framework, setFramework] = useState('react')

    const handleShipping = (e) => {
        console.log(e.target.checked);
        setShipping(e.target.checked)
    }


    const handleFramework = (e) => {
        setFramework(e.target.value)
    }

  return (
    <form className='form'>
      <h4>Other Inputs</h4>
      <div style={{ textAlign: 'left' }}>
        <label htmlFor='shipping'>Free Shipping</label>
        <input
          type='checkbox'
          name='shipping'
          id='shipping'
          checked={shipping}
          onChange={handleShipping}
        />
      </div>
      <div style={{ textAlign: 'left' }}>
        <label htmlFor='framework'>Framework</label>
        <select
          name='framework'
          id='framework'
          value={framework}
          onChange={handleFramework}
        >
          {frameworks.map((framework) => {
            //   console.log(framework);
            return <option key={framework}>{framework}</option>;
          })}
        </select>
      </div>
      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  );
}

export default OtherInputs;
