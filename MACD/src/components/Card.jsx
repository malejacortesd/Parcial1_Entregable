import React from 'react'

const Card = ({ comida, bebida, cantidad }) => {
  return (
    <div>
        <h1>{comida}</h1>
        <h2>{bebida}</h2>
        <h3>{cantidad}</h3>
    </div>
  )
}

export default Card