import { useEffect, useState } from 'react'
import './App.css'
import Dice from "./Dice"

function App() {

  const [finish,setFinish]=useState(false)
  const [stops, setStop] = useState([false, false, false, false, false, false, false, false, false, false])
  const [numbers, setNumbers] = useState(() => Array(10).fill().map(() => (Math.floor(Math.random() * 6) + 1)))
  const [count, setCount] = useState(0)

  function generateRandom() {
    const arr = Array(10).fill().map(() => Math.floor(6 * Math.random()) + 1)
    setNumbers(prev => prev.map(
      (num, index) => stops[index]
        ? num
        : arr[index]
    ))
    setCount(prev => prev + 1)
  }

  function setStopfunc(undex) {
    setStop(prev => prev.map(
      (val, index) => index === undex
        ? !val
        : val
    ))
  }

  useEffect{()=>{
    for(const i=0;i<9;i++){
      
    }
  },[stops]}

  return (
    <div className="App">
      <div className='outer-box'>
        <div className='inner-box'>
          <div className='container'>
            <div className='count'>
              {count}
            </div>
          </div>
          <div className='texts'>
            <h1 className='title'>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls0.</p>
            <div className='dices'>
              {numbers.map((number, index) => <Dice stop={stops[index]} number={number} index={index} setFreeze={setStopfunc} />)}
            </div>
            <button className='but' onClick={generateRandom}>Roll</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
