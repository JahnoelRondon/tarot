import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'


export const CardPage = () => {

  const location = useLocation()
  // must make type, use model and check object for properties ill want to use
  const [cardData, setData] = useState(location.state)

  console.log(cardData);
  
  return (
    <>
      {/* <img src={`http://localhost:3000/assets/cards/${cardData.img}`}/> */}
    </>
  )
}
