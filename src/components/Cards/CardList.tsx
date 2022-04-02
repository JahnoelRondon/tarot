import React from 'react'
import {Card} from '../../model'
import {CardInfo} from './CardInfo'
import "./cards.css"

interface Props {
  filteredCards: Card[]
}

export const CardList = ({filteredCards}: Props) => {
  return (
    <section className='cardList'>
      {filteredCards.map(card => (
        <CardInfo key={card.name} card={card}/>
      ))}
    </section>
  )
}
