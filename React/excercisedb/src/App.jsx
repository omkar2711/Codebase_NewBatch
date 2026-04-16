import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllExercise from './Pages/AllExercise'
import ListBodyParts from './Pages/ListBodyParts'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-exercises' element={<AllExercise />}/>
          <Route path='/all-body-parts' element={<ListBodyParts />}/>
        </Routes>
      </main>
      
      
    </div>
  )
}

export default App
