import React from 'react'
import {Card} from '../../model'
import {CardList} from '../Cards/CardList'

interface Props {
  cards: Card[] | undefined
}

export const Suit = ({cards}: Props) => {
  return (
    <section className='suitPage'>
      {/* make a component that renders information based on the suit name, can use cards[0].suit to compare */}
      

      {/* cardlist components */}
      <CardList cardsListed={cards}/>
    </section>
  )
}
