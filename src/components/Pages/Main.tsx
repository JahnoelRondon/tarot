import React from 'react'
import {Search} from '../Search'
import {CardList} from '../Cards/CardList'
import {IntroText} from '../IntroText'
import {Card} from '../../model'


interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // made into tuple because filteredcards is initial undefined
  filteredCard: Card[] | undefined;
}

export const Main = ({handleChange, filteredCard}: Props) => {
  
  return (
    <>
      <IntroText />
      <Search handleChange={handleChange} />
      {filteredCard && <CardList filteredCards={filteredCard}/>}
    </>
  )
}
