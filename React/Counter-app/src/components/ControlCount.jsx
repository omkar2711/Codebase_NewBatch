import React from 'react'

const ControlCount = ({setCount , count}) => {

    const handleIncrement = () => {
        setCount(p => p + 1);
        setCount(p => p + 1);
        setCount(p => p + 1);
    }
    const handleDecrement = () => {
        setCount(p => p - 1);
    }

    const handleReset = () => {
        setCount(0);
    }


  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ControlCount
