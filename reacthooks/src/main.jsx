import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseState from './UseState.jsx'
import UseEffect from './UseEffect.jsx'
import UseRef from './UseRef.jsx'
import UseMemo from './UseMemo.jsx'
import UseCallback from './UseCallback.jsx'
import UseContext from './UseContext.jsx'

import './index.css'
import ContextProvider from './Context/AppContext.jsx'
import UseReducer from './UseReducer.jsx'
import UseLayoutEffect from './UseLayoutEffect.jsx'
import Customhook from './Customhook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Customhook />
  </>
)

// {/* <UseLayoutEffect /> */}
// {/* <UseReducer /> */}
// {/* <ContextProvider>  
//   <UseContext />
// </ContextProvider> */}
// {/* <UseCallback /> */}
// {/* <UseMemo /> */}
// {/* <UseRef /> */}
// {/* <UseEffect /> */}
// {/* <UseState /> */}