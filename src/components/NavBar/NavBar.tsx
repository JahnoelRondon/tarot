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
      <Link to='/suit' className='nav_suit' onClick={() => suitCategory('Trump')}>Trumps</Link>
      <Link to='/suit' className='nav_suit' onClick={() => suitCategory('Cups')}>Cups</Link>
      <Link to='/suit' className='nav_suit' onClick={() => suitCategory('Swords')}>Swords</Link>
      <Link to='/suit' className='nav_suit' onClick={() => suitCategory('Wands')}>Wands</Link>
      <Link to='/suit' className='nav_suit' onClick={() => suitCategory('Pentacles')}>Pentacles</Link>

    </nav>
  )
}
