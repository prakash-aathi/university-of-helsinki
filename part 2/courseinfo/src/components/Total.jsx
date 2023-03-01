import React from 'react'

function Total({ parts }) {
  return (
    <b>total of { parts.reduce((total,part) => total + part.exercises,0 ) } exercises </b>
    )
}

export default Total