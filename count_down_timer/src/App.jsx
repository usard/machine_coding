import { useState, useRef } from 'react'
import CountDown from './CountDown'
import './App.css'

let obj = {
  hours: 0,
  minutes: 5,
  seconds: 43
}



function App() {
  console.log('re render', obj.seconds)
  let id = useRef(0)
  const [timer, setTimer] = useState(obj)
  const handleTimer = (e) => {
    const {name, value} = e.target
    setTimer({...timer, [name]:value})
  }

  const handleReset = () => {
    clearInterval(id.current)
    id.current = 0
    setTimer({...obj})
  }

  const handlePause = () => {
    clearInterval(id.current)
    id.current = 0
  }

  const startTimer = () => {
    console.log('id :', id)
    if (id.current !=0) {
      return
    }
    if (timer.minutes == 0 && timer.seconds == 0  && timer.hours == 0 ) {
      clearInterval(id.current)
      return
    }
    let {hours, minutes, seconds} = timer
     id.current = setInterval(()=> {
      console.log(' i am there')
       setTimer((timer)=>{
        if (timer.hours >=0){
          if (timer.seconds == 0) {
            if (timer.minutes>0){
              seconds = 59
              minutes = timer.minutes - 1
            }
            else {
              if (timer.hours > 0) {
                hours = timer.hours - 1
                minutes = 59
                seconds = 59
              }
            }
          }
          else {
            seconds = timer.seconds - 1
          }
        }
        
        return {
          ...timer,
          hours: hours, 
          minutes: minutes,
          seconds: seconds, 
        }
      })
     }, 1000)
  }

  return (
    <>
      <CountDown timer={timer} handleTimer = {handleTimer}></CountDown>
      <button type='button' onClick ={startTimer} >start</button>
      <button type='button' onClick={handleReset}>reset</button>
      <button type='button' onClick = {handlePause}> pause</button>
    </>
  )
}

export default App
