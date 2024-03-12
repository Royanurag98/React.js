
import { useState } from 'react';
import './App.css';
import "./Swap"
import Swap from './Swap';

function App() {

  const [count, setCount]= useState(20);
    const addValue=()=>{
    console.log("Clicked", count );
    // const count = count+5;
    setCount(count+1);

  }
  return (
    <>
    <Swap/>
    <h1>Hello React</h1>


    I want to change the vlue pf all element if i change one element value
    <button onClick={addValue}>  Add value</button>
     <h1>Value is : {count} </h1>
     <h1>Value is :  {count} </h1>
     <h1>Value is : {count} </h1>
     <h1>Value is :  {count} </h1>
     <h1>Value is :  {count} </h1>
    </>
    
  )
}

export default App;
