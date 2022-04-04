import React from 'react'
import {Card} from '../../model'

interface Props {
  cards: Card[] | undefined
}

export const Suit = ({cards}: Props) => {
  console.log(cards);
  return (
    <div>Suit</div>
  )
}
