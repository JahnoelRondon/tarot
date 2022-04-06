import React from 'react'
import {Card} from '../../../model'
import {CardList} from '../../Cards/CardList'
import { suit } from '../../../model'
import './suit.css'

interface Props {
  cards: Card[] | undefined
}

export const Suit = ({cards}: Props) => {
  console.log(cards ? typeof cards[0].name : '');

  const suitString = cards ? cards[0].suit.toLocaleLowerCase() : '';
  
  return (
    <section className='suitPage'>
      {/* make a component that renders information based on the suit name, can use cards[0].suit to compare */}
      <div className='suitPage_info'>
        <h2 className='suitPage_title'>The {suitString} cards and what they mean.</h2>
        <p className='suitPage_txt'>{cards ? suit[suitString as keyof typeof suit] : ''}</p>
      </div>

      {/* cardlist components */}
      <CardList cardsListed={cards}/>
    </section>
  )
}
