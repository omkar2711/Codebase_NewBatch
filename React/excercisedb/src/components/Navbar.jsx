import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-8 mx-20 justify-center'>
      <Link to='/'>Home</Link>
      <Link to='/all-exercises'>All Excercise</Link>
      <Link to='/all-body-parts'> All Body Parts</Link>
    </div>
  )
}
 
export default Navbar
