import React from 'react'
import {Card} from '../../model'
import {CardInfo} from './CardInfo'
import "./cards.css"

interface Props {
  cardsListed: Card[] | undefined
}

export const CardList = ({cardsListed}: Props) => {
  return (
    <section className='cardList'>
      {cardsListed?.map(card => (
        <CardInfo key={card.name} card={card}/>
      ))}
    </section>
  )
}
