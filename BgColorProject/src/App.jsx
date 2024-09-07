import React, { useState } from 'react'
import Btn from './assets/components/Btn'

function App() {
  const [color, setColor] = useState("whitesmoke");
  return (
    <>
        <div className='w-full absolute h-screen' style={{backgroundColor: color}}>
            <h1 className='bg-black text-center m-4 text-white p-3 rounded-md border'>BG Changer</h1>
            <div className='border-2 border-black rounded-md m-4 p-2 flex justify-evenly'>
                <Btn colorname='Blue' setColor={setColor}/>
                <Btn colorname='Green' setColor={setColor}/>
                <Btn colorname='Red' setColor={setColor}/>
                <Btn colorname='Yellow'setColor={setColor}/>
            </div>
        </div>
    </>
  )
}

export default App