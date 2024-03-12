import React, { useState } from 'react';

function CreateUSI() {

    const [Convert, setConvert]=useState()

    function Transform(){
        console.log("btn clicked")
        let length=setConvert.length;

        let convertCase=Convert.toLowerCase();
        let str=convertCase.split(" ").join("");
        
    
        setConvert(`@${str}${length * Math.floor(Math.random() * 100)}`)
    }
    function handleonChange(){
        setConvert(event.target.value);
    }
    return (
        <>
        <h1 className='heading'> Create User Name</h1>
        <div className='arrange'>
        <div className='Container'> 
    
        <div className='box2'>
          <h1 className='txt'>User Name Generator</h1>
          <input type="text"  className='input' value={Convert} onChange={handleonChange} placeholder='Enter your text'/>  
          <button className='btn btn-primary my-3' onClick={Transform} >Create User Name</button>  
        </div>
     
        </div>
        </div>
        </>
    );
}

export default CreateUSI;
