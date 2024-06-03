import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addvalue = () => {
    // console.log('clicked', counter);

    if (counter >= 10) {
      return
    } else {
      setCounter(counter + 1)
    }

  }

  const removevalue = () => {

    if (counter <=0 ) {
      return
    } else {
      setCounter(counter - 1)
    }
}  



  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addvalue}

      >Add value {counter}</button>
      <br />
      <button
      onClick={removevalue}
      >Remove value {counter}</button>

    </>
  )
}

export default App
