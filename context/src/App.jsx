import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { useContext } from 'react'
import UserContext from '../src/context/UserContext.js'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  
  // const {val,setVal}=useContext(UserContext)
  return (
    <>
      <h1>Hi</h1>
      <Login/>
      <Profile/>
    </>
  )
}

export default App
