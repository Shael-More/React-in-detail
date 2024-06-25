import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

export default function Customhook() {

  const [name, setName] = useLocalStorage('username', '')
  const [id, setId] = useLocalStorage('userid', '')
  return (
    <>
        <div>Customhook</div>

        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
        
        <h2>Hello, {name}!</h2>

        <input type="text" placeholder='Enter your id' value={id} onChange={(e) => setId(e.target.value)}/>

        <h2>Your ID: {id}</h2>
    </>
  )
}
