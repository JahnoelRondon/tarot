import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { CardDetails } from '../../model'

export const CardPage = () => {

  const location = useLocation();
  const state = location.state as CardDetails // Type casting, convert a variable from one type to another.
  
  const [cardData, setData] = useState(state)

  
  return (
    <>
      <img src={`http://localhost:3000/assets/cards/${cardData.img}`}/>
    </>
  )
}
