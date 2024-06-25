import React, {useState} from 'react'

export default function UseState() {
    const [count, setCount] = useState(0)
    // increase count by 4
    const handleChange =() => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
    <>
    <div className='center'>
        <h1>Count: {count}</h1>
        <button onClick={handleChange}>Increment by 4</button>

    </div>
    </>
  )
}
