import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div
        className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button
              onClick={() => setColor('red')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'red' }}
            >
              Red
            </button>
            <button
              onClick={() => setColor('blue')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'blue' }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor('green')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>
            <button
              onClick={() => setColor('Salmon')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'Salmon' }}
            >
              Salmon
            </button>
            <button
              onClick={() => setColor('White')}
              className='outline-none px-4 py-1 text-black shadow-lg rounded-xl'
              style={{ backgroundColor: 'White' }}
            >
              White
            </button>
            <button
              onClick={() => setColor('OrangeRed')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'OrangeRed' }}
            >
              OrangeRed
            </button>
            <button
              onClick={() => setColor('Yellow')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'Yellow' }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor('Violet')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'Violet' }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor('Brown')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'Brown' }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor('black')}
              className='outline-none px-4 py-1 text-white shadow-lg rounded-xl'
              style={{ backgroundColor: 'black' }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
