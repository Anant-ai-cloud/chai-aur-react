import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)
  // let counter = 15;
  const Addvalue = ()=>{
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    
  
  // if(counter == 20){
  //   setCounter(20)
  // }else{
  //   setCounter(counter +1)
  // }
  }
  const removevalue = ()=>{
    if(counter == 0){
      setCounter(0)
    }else{
    setCounter(counter -1)
     
    }
   
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter} </h2>
    <button onClick = {Addvalue}>Add value  {counter} </button>
    <br />
    <button onClick = {removevalue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
