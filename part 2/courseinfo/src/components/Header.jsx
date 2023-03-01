import React from 'react'

function Header(props) {
    console.log(props);
    return (
        <h2>{ props.course}</h2>
  )
}

export default Header