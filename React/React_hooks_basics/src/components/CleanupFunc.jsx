import React, { useEffect, useState } from 'react';

function CleanupFunc() {
  const [toggle, setToggle] = useState(false);

  console.log("render")
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>

      {toggle && <SecondComponent />}
    </div>
  );
}

function SecondComponent() {
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener('scroll', someFunc);
    // cleanup function
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return <h6>Second Component</h6>;
}

export default CleanupFunc;
