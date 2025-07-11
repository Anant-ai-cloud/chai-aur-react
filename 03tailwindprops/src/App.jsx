import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    name: "Yash",
    age: 22
  }
  let newArr = [1,2,3]

  return (
    <>
   
   
     <h1 className='bg-green-400 text-black p-4 rounded-xl cursor-pointer hover:bg-grey-50 mb-4'>Tailwind Test</h1> 
     <Card username="chaikesathcode" btntext="click me"/>
     <Card username= "Anant"/>
     <Card/>
  
   
    
    </>
  )
}

export default App
