import { createContext, useContext, useState } from 'react';

// create context
const GlobalContext = createContext();

// custom hooks
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
  const [name, setName] = useState('peter');
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
