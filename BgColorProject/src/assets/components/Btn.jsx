import React, { useState } from 'react'

function Btn({colorname, setColor}) {
  return (
    <>
        <div className='flex justify-center'>
            <button onClick={()=>setColor(colorname)} className='w-[100px] bg-white text-center m-4 text-black capitalize border-2 border-black hover:rounded-3xl transition-all rounded-md p-3'>
                {colorname}
            </button>
        </div>
    </>
  )
}

export default Btn