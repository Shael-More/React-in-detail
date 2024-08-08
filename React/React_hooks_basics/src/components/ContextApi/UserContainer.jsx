import { useAppContext } from "./Navbar";


function UserContainer() {

  const {user, logout, login} = useAppContext()

  return (
    <div>
        {/* conditional rendering */}
      {user ? (
        <>
          <p>Hello there, {user.name}</p>
          <button type='button' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button type='button' onClick={login}>
            login
          </button>
        </>
      )}
    </div>
  );
}

export default UserContainer;
