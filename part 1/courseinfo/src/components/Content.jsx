import React from 'react'
import Part from './Part'

function Content(props) {
    console.log(props);
    return (
      <div>
         <Part name={props.part1} exercise={props.exercises1}></Part>
         <Part name={props.part2} exercise={props.exercises2}></Part>
         <Part name={props.part3} exercise={props.exercises3}></Part>
      </div>
  )
}

export default Content