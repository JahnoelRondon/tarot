import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export const NavBar = () => {
  return (
    <nav>
      <Link to='/'><h1>Tarot</h1></Link>
    </nav>
  )
}
