import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../features/counter/counterSlice.js'

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>

      <h2>{count}</h2>

      <div >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
           className="counter"
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
           className="counter"
        >
          Decrement
        </button>
         <button
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
           className="counter"
        >
          reset
        </button>
      </div>
    </div>
  )
}

export default CounterComponent