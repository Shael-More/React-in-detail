import React, { useState } from 'react';

function ToggleChallenge() {
  const [showAlert, setShowAlert] = useState(false);

  //   const toggleAlert = () => {
  //     if (showAlert) {
  //         setShowAlert(false)
  //         return
  //     }
  //     setShowAlert(true)
  //   }

  return (
    <div>
      <button
        type='button'
        className='btn'
        onClick={() => setShowAlert(!showAlert)}
      >
        toggle
      </button>

      {showAlert && <Alert />}
    </div>
  );
}

const Alert = () => {
  return (
    <div
      style={{
        background: 'lightpink',
        color: '#3e3f22',
        width: '60vw',
        padding: '20px',
        margin: '2rem auto',
      }}
    >
      Hello world
    </div>
  );
};

export default ToggleChallenge;
