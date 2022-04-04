import React from 'react'
import {Search} from '../Search'
import {CardList} from '../Cards/CardList'
import {IntroText} from '../IntroText'
import {Card} from '../../model'


interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // made into tuple because filteredcards is initial undefined
  filteredCards: Card[] | undefined;
}

export const Main = ({handleChange, filteredCards}: Props) => {
  
  return (
    <section className='main'>
      <IntroText />
      <Search handleChange={handleChange} />
      {
        filteredCards && 
          filteredCards.length ? 
            <CardList filteredCards={filteredCards} /> :
            <p className='main_nomatch'>No Matches</p>
      }
    </section>
  )
}
