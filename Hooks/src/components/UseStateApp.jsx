import React, { useState } from "react"


export default function UseStateApp() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Increment by 4</button>
        </>
    )
}