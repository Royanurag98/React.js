let x=20;
let y=10;
function Sum(){
    return (
       <div>
        // We can call variable inside the {}
        <h1>Sum of x + y is {x+y} </h1> 
        {10+20} // Evaluated expression we can only write only evaluted expression of js
        // we can not  write js expression in return because
        {x}
        </div>
    )

}
export default Sum;