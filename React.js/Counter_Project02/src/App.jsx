// If you want to usee hooks we have to improt..  import { useState } from 'react' 
import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import question  from './interview/question.jsx'


// if you want to update 5 places on UI at the same time . in that case react is responsible for update 
// React provide a method that is HOOKS. This method is used to update the value of multiple places at once.

function App() {
  // useState hooks is responsible for change(not the value) the state. and we can pass anything as a default value inside ()
  // useState return a array. this array contain at the zero place counter(variable) and at the 1st place contain setCounter function
  // setCounter method is responsible for update the value of counter variable  from everwher of UI 
 let [counter, setCounter]= useState(15)

 function addValue(){
 // Add value not greater then 20
  if( counter<20){
    counter= counter+1;
    console.log("Counter", counter);
    setCounter(counter);
  }
  else
  alert("Value grater then 20 is not required")
 }


// Remove value not less then 0
 const removeValue=()=>{
  if(counter>0){
    counter= counter-1;
    counter=counter+1;
    console.log("Clicked", counter)
    setCounter(counter) 
  }

  else
  alert("Value less then 0 is not required")

 }
  return (
  <>
  <h1>This is my first React Project</h1>
   <div className="box"> 
    <h1>Enter your link:{counter}</h1>
    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={removeValue}> Remove Value  {counter}</button>
    <footer>
      @value_is : {counter}
    </footer>

   </div>
   
   
  </>
  )
     
}

export default App
