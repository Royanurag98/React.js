import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black font-bold p-5 rounded text-wrap'>tailwind CSS </h1>
    
     <Cards headindCards="Mac Book" btnText="Click Me" />
     <Cards headindCards="Windows" btnText="Read More" />
    </>
  )
  }

export default App
