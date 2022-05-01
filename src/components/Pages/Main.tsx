import React from 'react'
import {Search} from '../Search'
import {CardList} from '../Cards/CardList'
import {IntroText} from '../IntroText'
import {Card} from '../../model'


interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // made into tuple because filteredcards is initial undefined
  cardsListed: Card[] | undefined;
  searchField: string;
}

export const Main = ({handleChange, cardsListed, searchField}: Props) => {
  
  return (
    <section className='main'>
      <IntroText />
      <Search handleChange={handleChange} searchField={searchField}/>
      {
        cardsListed && 
          cardsListed.length ? 
            <CardList cardsListed={cardsListed} /> :
            <p className='main_nomatch'>No Matches</p>
      }
    </section>
  )
}
