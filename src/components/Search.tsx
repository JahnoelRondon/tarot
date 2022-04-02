import React from 'react'
import './componentStyles.css'

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({handleChange}: Props) => {
  return (
    <section className='searchField'>
      <input type='search' onChange={handleChange} placeholder='Search Cards' className='searchField__input'/>
    </section>
  )
}
