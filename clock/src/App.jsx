import React, { useContext } from 'react'
import Clock from './Components/Clock'
import StopWatch from './Components/StopWatch'
import CountDown from './Components/CountDown'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from './Components/Context'

export default function App() {
  const {focus,setFocus} = useContext(AppContext)
  const {dark} = useContext(AppContext)
  const className = ()=>{
    if(dark==true && focus==false){
      return "dark"
    }if(focus==true){
      return "focus"
    }if (dark==false && focus==false){
      return "light"
    }
  }
  return (
    <div id='app' className={className()}>
      {focus ? ("") : <Navbar/>}
      <Routes>
        <Route path='/' element={<Clock/>} />
        <Route path='/countdown' element={<CountDown/>} />
        <Route path='/stopwatch' element={<StopWatch/>} />
      </Routes>
      <div id='name'>~ developed by Rikhil</div>
      <div id='focus-btn'>
        <button onClick={()=>{
          setFocus(!focus)
        }} style={{color: `${dark ? "#D0D5FA" : "#3B5B7C"}`}}>F</button>
      </div>
    </div>
  )
}
