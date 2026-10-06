import './App.css'
import { useState } from 'react'

function CalcDisplay({ dispValue }) {
  return (
    <div className='CalcDisplay'>
      {dispValue}
    </div>
  )
}

function CalcButton({ label, buttonClassName = 'CalcButton', onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState('0')

  const onClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerText

    // Clear display back to 0
    if (value === 'CLR') {
      setDisp('0')
      return
    }

    // Append clicked keys together instead of replacing the state completely
    setDisp((prev) => {
      if (prev === '0') {
        return value
      }
      return prev + value
    })
  }

  return (
    <div className='App'> 
      <div className='Headers'> 
        Calculator of Kendrick Hugo - DA3A
      </div>
      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={onClickHandler} />
          <CalcButton label={'8'} onClick={onClickHandler} />
          <CalcButton label={'9'} onClick={onClickHandler} />
          <CalcButton label={'÷'} onClick={onClickHandler} />

          <CalcButton label={'4'} onClick={onClickHandler} />
          <CalcButton label={'5'} onClick={onClickHandler} />
          <CalcButton label={'6'} onClick={onClickHandler} />
          <CalcButton label={'X'} onClick={onClickHandler} />

          <CalcButton label={'1'} onClick={onClickHandler} />
          <CalcButton label={'2'} onClick={onClickHandler} />
          <CalcButton label={'3'} onClick={onClickHandler} />
          <CalcButton label={'-'} onClick={onClickHandler} />

          <CalcButton label={'CLR'} buttonClassName='ClearButton' onClick={onClickHandler} />
          <CalcButton label={'0'} onClick={onClickHandler} />
          <CalcButton label={'='} onClick={onClickHandler} />
          <CalcButton label={'+'} onClick={onClickHandler} />
        </div>
      </div>
    </div>
  )
}

export default App