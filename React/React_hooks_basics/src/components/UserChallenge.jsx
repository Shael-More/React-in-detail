import React, { useState } from 'react';

function UserChallenge() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  const login = () => {
    setUser({ name: 'Mike' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className='btn' type='button' onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className='btn' type='button' onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default UserChallenge;
