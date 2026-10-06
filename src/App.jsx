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
    // Pass label directly back to the handler on click
    <button className={buttonClassName} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState('0')

  const handleButtonClick = (val) => {
    // 1. Clear button logic
    if (val === 'CLR') {
      setDisp('0')
      return
    }

    // 2. Equals/Evaluation logic
    if (val === '=') {
      try {
        // Replace user-friendly characters with standard JS operators
        const sanitizedExpression = disp
          .replace(/÷/g, '/')
          .replace(/X/g, '*')

        // Safely evaluate math expression
        const result = Function(`"use strict"; return (${sanitizedExpression})`)()
        setDisp(String(result))
      } catch (err) {
        setDisp('Error')
      }
      return
    }

    // 3. Digit and operator input logic
    setDisp((prev) => {
      if (prev === '0' || prev === 'Error') {
        return val
      }
      return prev + val
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
          {/* Note: Fixed lowercase "onclick" to camelCase "onClick" */}
          <CalcButton label={'7'} onClick={handleButtonClick} />
          <CalcButton label={'8'} onClick={handleButtonClick} />
          <CalcButton label={'9'} onClick={handleButtonClick} />
          <CalcButton label={'÷'} onClick={handleButtonClick} />

          <CalcButton label={'4'} onClick={handleButtonClick} />
          <CalcButton label={'5'} onClick={handleButtonClick} />
          <CalcButton label={'6'} onClick={handleButtonClick} />
          <CalcButton label={'X'} onClick={handleButtonClick} />

          <CalcButton label={'1'} onClick={handleButtonClick} />
          <CalcButton label={'2'} onClick={handleButtonClick} />
          <CalcButton label={'3'} onClick={handleButtonClick} />
          <CalcButton label={'-'} onClick={handleButtonClick} />

          <CalcButton label={'CLR'} buttonClassName='ClearButton' onClick={handleButtonClick} />
          <CalcButton label={'0'} onClick={handleButtonClick} />
          <CalcButton label={'='} onClick={handleButtonClick} />
          <CalcButton label={'+'} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  )
}

export default App