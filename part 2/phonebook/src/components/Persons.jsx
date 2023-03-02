import React from 'react'

const Persons = ({render}) => {
  return (
      <>
          {render.map((person, index) => (
        <p key={index}>{person.name} { person.number}</p>
      ))}
      </>
  )
}

export default Persons