import React , {useState} from 'react'
import ShowCount from './components/ShowCount'
import ControlCount from './components/ControlCount'

const App = () => {

  const [count, setCount ] = useState(0);



  return (
    <div>
      <ShowCount count={count} />
      <ControlCount setCount={setCount} count={count} />

    </div>
  )
}

export default App
