import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'

function App() {

  return (
    <UserContextProvider>
    
      <h1>React with chai and share is important</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
