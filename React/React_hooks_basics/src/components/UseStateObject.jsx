import { useState } from 'react';

function UseStateObject() {
  const [person, setPerson] = useState({
    name: 'John',
    age: 23,
    hobby: 'read books',
  });

  const [value, setValue] = useState(0)

  function displayInfo() {
    setPerson({ name: 'susan', age: 21, hobby: 'scream at the computer' });
  }

  const { name, age, hobby } = person;

  function handleClick() {
   setTimeout(() => {
    console.log("clicked");
    setValue((currentState) => {
        return currentState + 1
    } )
   }, 3000)
  }

  return (
    <>
      {/* <div>UseState Object Example</div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
      <button type='button' onClick={displayInfo}>
        Show susan
      </button> */}

      <div>
        <h2>{value}</h2>
        <button type="button" style={{color:"red", background: "white"}} onClick={handleClick}>increase</button>
      </div>
    </>
  );
}

export default UseStateObject;
