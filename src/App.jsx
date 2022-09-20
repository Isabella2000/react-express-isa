import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Presentacion from './components/Presentacion';
// import {calculate} from './components/Presentacion';
import './App.css'

function App() {
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado]  = useState("")
  const [operator, setOpertor] = useState("");



  // const [count, setCount] = useState(0)
  // const [numero, setNumero] = useState(0)
  // const [nombre, setNombre] = useState("")
  // const [resul, setResultado] = useState({})
  // const [resulSaludo, setResulSaludo] = useState({})


  // const calculate = async (e) => {
  //   e.preventDefault();
  //   console.log(resultado);

  //   try {  
  //       const respuesta = await fetch(`http://localhost:4000/operacion/${numero}`);
  //       const resultado = await respuesta.json();
  //       setResultado(resultado);  
  //       console.log(resultado);              
  //   } catch (error) {
  //       console.log(error);
  //   }
  // };



  const calculate = async () => {
    const resultado = `${num1 + operator + num2}`
    const operacion = {
      numero: {
        resultado
      }
    }
    const ruta = JSON.stringify(operacion)
    try {
      console.log("hola2")
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



      <Presentacion
        // count={count}
        // setCount={setCount}
        
        num={num}
        setNum={setNum}
        num1={num1}
        setNum1={setNum1}
        num2={num2}
        setNum2={setNum2}
        resultado={resultado}
        operator={setOpertor}
        
      
  
      />
  )
}

export default App
