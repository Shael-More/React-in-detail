import React, { useCallback, useState } from 'react'
import Header from './components/Header'

export default function UseCallback() {
    const [counter, setCounter] = useState(0)

    const newFn = useCallback(()=> {}, [counter])

  return (
    <>
    <Header newFn={newFn}/>
        <h1>{counter}</h1>
        <button onClick={() => {
            setCounter(prev => prev + 1)
        }}>Click Here</button>
    </>
  )
}
