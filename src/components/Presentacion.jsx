import React from 'react'
import { useState, useEffect } from 'react';

console.log("hiiiiii")
const Presentacion = ({}) => {
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado]  = useState("")
  const [operator, setOpertor] = useState("");
  
  useEffect(() => {
    setNum1(num)
  }, [resultado])

  function inputNum(e) {
    let input = e.target.value
    setNum(`${num + input}`)

    if (operator == "")setNum1(`${num + input}`)
    else if (operator != "")setNum2(`${num + input}`)
  }

  
  function clear (){
    // input.slice(0,-1);
    setNum(num.slice(0, -1)); 
  }
  
  function clearAll(e) {
    setNum("")
    setOpertor("")
  }

  
  
  // function porcetange() {
    //   setNum(num/100);
    // }
    
    // function changeSign() {
      //   if (num>0) {
    //     setNum(-num);
    //   }else{
  //     setNum(Math.abs(num));
  //   }
  // }
  
  function operatorHandler(e) {
    var operatorInput = e.target.value;
      setOpertor(operatorInput)
      setNum("");
    }


    // export default calculate
    // function calculate() {
    //   const{json} = req.params;
    //   const respuesta = JSON.parse(json)
    //   respuesta.numero.resultado.num2
    //   const operator = respuesta.numero.resultado.operador
    //   respuesta.numero.resultado.num1
    //   if (operator === '/') setNum(parseFloat(num1) / parseFloat(num2));
    //   else if (operator === 'x') setNum(parseFloat(num1) * parseFloat(num2));
    //   else if (operator === '-') setNum(parseFloat(num1) - parseFloat(num2));
    //   else if (operator === '+') setNum(parseFloat(num1) + parseFloat(num2));
    //   setNum1("")
    //   setNum2("")
    //   setResultado(num)
    // }
  
    const calculate = async () => {
      const resultado = `${num1 + operator + num2}`
      const operacion = {
        numero: {
          resultado
        }
      }
      const ruta = JSON.stringify(operacion)
      try {
        // const respuesta = await fetch(`https://heroku-express29.herokuapp.com/operacion/${operacion}`)
        const respuesta = await fetch(`http://localhost:3000/operacion/${ruta}`)//Pasar a JSON la operacion para no desviar la ruta con "/"
        const resul = await respuesta.json()
        console.log(resul)
        setNum(resul.resultado)
      } catch (error) { console.log(error) }
      setNum1("")
      setNum2("")
      setResultado(num)
    }
    
  
    
  return (
        <div className='primerContenedor'>

<div class="calculadora">
  <div class="contenedor">

    <div class='console-container'>
      <p className="line-1 anim-typewriter">Calculadora Isa</p>
    </div>

    <h1 className="result">{num}</h1>
    {/* <input type="text"id="input" className="result" placeholder='0' value={num}/> */} 
    <div class="botones">
      <div class="operadores">
        <button class="operador" onClick={operatorHandler} value={"+"}>+</button>
        <button class="operador" onClick={operatorHandler} value={"-"}>-</button>
        <button class="operador" onClick={operatorHandler} value={"*"}>x</button>
        <button class="operador" onClick={operatorHandler} value={"%2F"}>/</button>

      </div>
      <div class="leftPanel">
        <div class="numeros">
          <button class="numero" id="teclas" onClick={inputNum} value={7}>7</button>
          <button class="numero" id="teclas" onClick={inputNum} value={8}>8</button>
          <button class="numero" id="teclas" onClick={inputNum} value={9}>9</button>
        </div>

        <div class="numeros">
          <button class="numero" id="teclas" onClick={inputNum} value={4}>4</button>
          <button class="numero" id="teclas" onClick={inputNum} value={5}>5</button>
          <button class="numero" id="teclas" onClick={inputNum} value={6}>6</button>
        </div>

        <div class="numeros">
          <button class="numero" id="teclas" onClick={inputNum} value={1}>1</button>
          <button class="numero" id="teclas" onClick={inputNum} value={2}>2</button>
          <button class="numero" id="teclas" onClick={inputNum} value={3}>3</button>
        </div>

        <div class="numeros">
          <button class="numero" id="teclas" onClick={inputNum} value={0}>0</button>
          <button class="numero" id="teclas" onClick={inputNum} value={'.'}>.</button>
          <button class="limpia" onClick={clearAll}>AC</button>
        </div>
      </div>
      
        <div class="signos">
      <button class="igual" onClick={calculate}>=</button>
      <button class="ac" onClick={clear}>C</button>
      </div>

    </div>
  </div>
</div>

</div>
  )
}

export default Presentacion