import React from 'react'
import {Card} from '../../model'

interface Props {
  card: Card
}

export const CardInfo = ({card}: Props) => {
  return (
    <>
      <img src={`http://localhost:3000/assets/cards/${card.img}`}/>
    </>
  )
}
