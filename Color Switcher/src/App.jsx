import { useState } from 'react'
import './App.css'

const colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];

function App() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className='background' style={{
      backgroundColor: colors[index],
    }}>
      <div className='count'>{count}</div>
      <div className='text-container'>
        <p className='color-text'>Background Color : </p>
        <p className='color-id' style={{
          color: colors[index],
        }}>{colors[index]}</p>
      </div>
      <button className='color-changer' onClick={() => {
        index === colors.length-1 ? setIndex(0) : setIndex(index+1);
        setCount(count+1);
        }}>Switch</button>
      <button className='reset-button' onClick={() => {
        setIndex(0);
        setCount(0);
      }}>Reset</button>
    </div>
  )
}

export default App

