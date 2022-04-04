import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../model'
import "./nav.css"

interface Props {
  suitCategory: (suit: string) => void
}

export const NavBar = ({suitCategory}: Props) => {
  
  return (
    <nav>

      <Link to='/' className='title'>
        <h1><span className='title_fun'>T</span>otally <span className='title_fun'>T</span>arot</h1>
      </Link>

      {/* must be written this way instead of {suitCategory('Trump')} */}
      <button onClick={() => suitCategory('Trump')}>Trumps</button>
      <button onClick={() => suitCategory('Cups')}>Cups</button>
      <button onClick={() => suitCategory('Swords')}>Swords</button>
      <button onClick={() => suitCategory('Wands')}>Wands</button>
      <button onClick={() => suitCategory('Pentacles')}>Pentacles</button>

    </nav>
  )
}
