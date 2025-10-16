import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

// Enter your name --> then is allowed to enter into the site with random number assigned to each of the thingy!

function App() {
  const [count, setCount] = useState(0)

  // useEffect(()=>{
  //   alert("STARTING RARARA" + count);
  //   setCount(count+3)
  // },[count])

  /*
  .split("")
  useState
  useEffect

  syntax of ()=>{}...etc Arghh
  */

  return (
    <>

    <button onClick={()=>(setCount(count+1))}>Click on Me</button>
    <p>{count}</p>

    <h1>This is an app</h1>

    </>
  )
}

export default App
