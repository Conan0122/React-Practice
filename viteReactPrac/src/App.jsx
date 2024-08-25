import { useState } from "react";


function App() {
  let [counter, setCounter] = useState(0)

  const addValue = ()=>{
    console.log(`Value added ${counter}`);
    if (counter==10){
      alert('Cannot go above 10')
    }
    else{
      setCounter(++counter)
    }
  }
  const subValue = ()=>{
    console.log(`Value subtracted ${counter}`);
    if (counter==0){
      alert('Cannot go below 0')
    }
    else{
      setCounter(--counter)
    }
  }

  return (
    <>
      <h1>Hello Conan! {counter}</h1>
      <h1>Current value : {counter}</h1>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={subValue}>Subtract</button>
      
    </>
  )
}

export default App
