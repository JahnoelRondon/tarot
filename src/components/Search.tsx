import React from 'react'

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({handleChange}: Props) => {
  return (
    <input type='search' onChange={handleChange}/>
  )
}
