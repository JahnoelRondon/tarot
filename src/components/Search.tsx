import React from 'react'
import './componentStyles.css'

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchField: string;
  // input value to filtered cards
}

export const Search = ({handleChange, searchField}: Props) => {
  console.log(searchField)
  return (
    <section className='searchField'>
      <input type='search' onChange={handleChange} placeholder='Search Cards' className='searchField__input' value={searchField}/>
    </section>
  )
}
