import React from 'react'
import SubCard from './SubCard'

const Card = ({name}) => {
  return (
    <div>


        <h2>Name : {name}</h2>
        <h2>This is my Card</h2>
        <SubCard />
    </div>
  )
}


export default Card
