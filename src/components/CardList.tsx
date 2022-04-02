import React from 'react'
import {Card} from '../model'
import {CardInfo} from './CardInfo'

interface Props {
  filteredCards: Card[]
}

export const CardList = ({filteredCards}: Props) => {
  return (
    <div>
      {filteredCards.map(card => (
        <CardInfo key={card.name} card={card}/>
      ))}
    </div>
  )
}
