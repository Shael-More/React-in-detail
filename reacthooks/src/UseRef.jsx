import React,{useEffect, useRef, useState} from 'react'

export default function UseRef() {

//   const [value, setValue] = useState(0)
//   const count = useRef(0)

//   useEffect(() => {
//     count.current += 1 
//   })


// ----------------------------

    const inpElem = useRef()
    const btnClicked = () => {
        console.log(inpElem.current)

        inpElem.current.style.background = "green"
    }


  return (
    <>
        {/* <button onClick={() => setValue(prev => prev - 1)}>-1</button>
        <h1>{value}</h1>
        <button onClick={() => {setValue(prev => prev + 1)}}>+1</button>


        <h3>Rendered Count :{count.current}</h3> */}


        <input type="text" ref={inpElem}/>
        <button onClick={btnClicked}>Click Here</button>
    </>
  )
}
