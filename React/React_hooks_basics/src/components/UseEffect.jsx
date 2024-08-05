import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

export default function UseEffect() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>loading....</h2>;
  }

  if (isError) {
    return <h2>There was an error....</h2>;
  }

  const {name, company, avatar_url, bio} = user

  return (
    <>
      <div>
        <img
          style={{ width: '150px', borderRadius: '25px' }}
          src={avatar_url}
          alt={name}
        />
        <h2>{name}</h2>
        <h4>Works at {company}</h4>
        <p>{bio}</p>
      </div>
    </>
  );

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const users = await response.json();
  //       setUsers(users);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // return (
  //   <section>
  //     <h3>Github User</h3>
  //     <ul className='users'>
  //       {users.map((user) => {
  //         console.log(user)

  //         const {id, login, avatar_url, html_url} = user;
  //         return (
  //           <li key={id}>
  //             <img src={avatar_url} style={{width:"100px", margin: "10px", borderRadius: "50%"}}/>
  //             <div>
  //               <h5>{login}</h5>
  //               <a href={html_url}>profile</a>
  //             </div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </section>
  // );
}
