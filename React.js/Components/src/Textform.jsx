import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Textform(props) {
     
    const [Change, setChange]= useState("");
     let text;
    function toUpper(){
       
        let newText=Change.toUpperCase();
        setChange(newText)
    }
    function handleonChange(){
        setChange(event.target.value);
    }
    const toLower=()=>{
        let thisText=Change.toLowerCase();
        setChange(thisText)
    }
    const toClear=()=>{
        let thisText="";
        setChange(thisText)
    }
    const toCopy=()=>{
        navigator.clipboard.writeText(Change)
        
        
         alert("copyed")
        // setChange(thisText)
    }
    return (
        <>
        <h1 className="heading">{props.heading}</h1>
        <div className='box'>
            <div className="mb-2 ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.massage}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={Change} onChange={handleonChange} placeholder='Enter your text'></textarea>
                <div className='Summery'>
             
                    <div className='b1'> Words : {Change.split(" ").length}</div>
                    <div className='b1'>Character : {Change.length}</div>
                    <div className='b1'> <p>Words Per Minuts :{ Change.split(" ").length*0.008}</p></div>
                </div>
                <button className='btn btn-primary my-3 mx-3' onClick={toUpper} >Upper Case</button>
                <button className='btn btn-primary my-3' onClick={toLower} >Lower Case</button>
                <button className='btn btn-primary my-3 mx-3' onClick={toClear} >Clear Text</button>
                <button className='btn btn-primary my-3 mx-3' onClick={toCopy} >Copy Text</button>
                 
            
            </div>
            </div>

            <div className='Conatiner'>
            <h1>Your text Summery</h1>
                <h1>Prevew :</h1>
                <p>{Change}</p>
            </div> 
        </>
    );
}

export default Textform;
Textform.propTypes = {
    heading: PropTypes.string.isRequired,
    massage: PropTypes.string.isRequired
  
  }

  Textform.defaultProps = {
    heading: 'Stranger',
    massage: "Koenahi"
    
  }

