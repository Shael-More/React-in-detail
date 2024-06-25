import React, {useEffect, useState} from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    setTimeout(()=>{
        setCount(prev => prev + 1)
    }, 2000)
  }, [count])


  return (
    <>
        <h1>I've rendered {count} times!</h1>
    </>
  )
}
