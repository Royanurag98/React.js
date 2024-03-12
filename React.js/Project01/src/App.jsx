import { useState } from "react"


function App() {
const [color , setColor]= useState("olive")


  return (
      <div className="w-full h-screen"
      style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
          <div  className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button className=" px-2 rounded-lg  text-white  w-20 p-2"
          onClick={()=>setColor("red")}
          style={{backgroundColor:"red"}}>Red
          </button>
          <button className=" px-2 rounded-lg  text-white w-20 p-2"
          onClick={()=>setColor("green")}
          style={{backgroundColor:"Green"}}>Green
          </button>
          <button className=" px-2 rounded-lg text-white w-20 p-2"
          onClick={()=>setColor("yellow")}
          style={{backgroundColor:"yellow"}}>Yellow
          </button>
          <button className=" px-2 rounded-lg  text-white w-20 p-2"
          onClick={()=>setColor("blue")}
          style={{backgroundColor:"blue"}}>Blue
          </button>
          <button className=" px-2 rounded-lg  text-white w-20 p-2"
          onClick={()=>setColor("black")}
          style={{backgroundColor:"black"}}>Balck
          </button>
          
        </div>
        </div>
        </div>

     

     

  )
}

export default App
