import React from 'react';
import useFetch from './useFetch';

const url = 'https://api.github.com/users/QuincyLarson';
function FetchData() {
  const { isLoading, isError, data: user } = useFetch(url);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>There is some error....</h3>;
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '100px', borderRadius: '25px' }}
      />
      <h2>{name}</h2>
      <h3>Works at {company}</h3>
      <p>{bio}</p>
    </div>
  );
}

export default FetchData;
