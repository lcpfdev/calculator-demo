import { useState } from "react";

function App() {
const [calc, setCalc] = useState("");
const [result, setResult] = useState("")

const ops = ['/', 'x', '+', '-', '.']

const updateCalc = value => {
 setCalc(calc + value);
}

const calculate = () => { //FINAL SUM
  setCalc(eval(calc).toString());
}

const del = () => {
  const value = calc.slice(0, -1);
  setCalc(value)

}


  return (
    <div className="App">
     <div className="calculator">
       <div className="display">
         <span></span> {calc || "0"}
       </div>
       <div className = "operators">
       <button onClick={() => updateCalc('/')}> /</button> 
         <button onClick={() => updateCalc('+')}> +</button> 
         <button onClick={() => updateCalc('-')}> -</button> 
         <button onClick={() => updateCalc('x')}  >x</button>
         <button onClick={del}>del</button>
         </div>

         <div className = 'numbers'>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('1')}>1</button>
          <button onClick={() => updateCalc('2')}>2</button>
          <button onClick={() => updateCalc('3')}>3</button>
          <button onClick={() => updateCalc('4')}>4</button>
          <button onClick={() => updateCalc('5')}>5</button>
          <button onClick={() => updateCalc('6')}>6</button>
          <button onClick={() => updateCalc('7')}>7</button>
          <button onClick={() => updateCalc('8')}>8</button>
          <button onClick={() => updateCalc('9')}>9</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
         </div>




     </div>
    </div>
  );
}
 
export default App;
