import React, {useEffect, useLayoutEffect} from 'react'

export default function UseLayoutEffect() {

    useEffect(() => {console.log("Message from useEffect");}, [])

    useLayoutEffect(() => {console.log("Message from useLayoutEffect");}, [])
  return (
    <>
    <div>UseLayoutEffect</div>

    {Array(40000).fill('')
    .map((item, index) => (<li key={index}>{Math.pow(Math.random(), 10)}</li>) )}
    </>
  )
}
