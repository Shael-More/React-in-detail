import React, { useEffect, useState, useRef } from 'react';

function UseRefBasics() {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null);
  const isMounted = useRef(false);
  // console.log(refContainer);

  useEffect(() => {
    // console.log(isMounted);

    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    console.log('re-renders');
  }, [value]);

  // useEffect(() => {
  //   // console.log(refContainer); // getting the dom element after initial render
  //   refContainer.current.focus()

  // })

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h4>UseRef Basics</h4>

        <div>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' ref={refContainer} />
        </div>

        <button type='submit'>Submit</button>
      </form>

      <h1>Value: {value}</h1>
      <button type='button' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseRefBasics;
