let x=20;
let y=30;
let temp=0;
function Swap(){
    temp=x+y;
    x=temp-x;
    y=temp-y;
    
    return (
        <>
   

        <h1> Swap of two value</h1>
        <div>
            Befour swaping 
            x= {x}
            y= {y}

            After swaping 
             x
             y

        
        </div>
        </>
    )
}

export default Swap;