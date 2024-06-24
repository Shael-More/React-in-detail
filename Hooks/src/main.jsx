import React from 'react'
import ReactDOM from 'react-dom/client'
// import UseStateApp from './components/UseStateApp'
import UseEffectApp from './components/UseEffectApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseStateApp />
    <UseEffectApp/>
  </React.StrictMode>,
)
