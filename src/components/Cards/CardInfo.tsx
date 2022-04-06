import React from 'react'
import {Card} from '../../model'
import {Link} from 'react-router-dom'

interface Props {
  card: Card
}

export const CardInfo = ({card}: Props) => {
  return (
    <>
      <Link to='/card' state={card}>
        <img className='cardStyles' src={`https://totallytarot.netlify.app//assets/cards/${card.img}`}/>
      </Link> 
    </>
  )
}
