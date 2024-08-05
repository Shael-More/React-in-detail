// conditional rendering

import React, { useState } from 'react';

function Challenges() {
  //falsy
  const [text, setText] = useState('');
  //truthy
  const [name, setName] = useState('Mike');
  const [user, setUser] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div>
      <h1>Short Ciruit Overview</h1>
      {/* <h3>{text || "default value"}</h3> */}
      <h3>
        {/* {name && (
          <div>
            <h2>whatever returns</h2>
            <h3>{name}</h3>
          </div>
        )} */}

        {user && < SomeComponent name={user.name}/>}

        <h2 style={{margin: "1rem 0"}}>Ternary operator</h2>
        <button type='button' className='btn'>{isEditable ? "edit" : "add " }</button>


        {user ?  <div>
      <h2>Hello, {user.name}</h2>
    </div> : <div>
        <h2>Please Login</h2>
    </div> }
      </h3>
    </div>
  );
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever returns</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default Challenges;
