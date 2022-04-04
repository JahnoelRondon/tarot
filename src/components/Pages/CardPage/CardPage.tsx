import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { CardDetails } from '../../../model'
import './detail.css'

export const CardPage = () => {

  const location = useLocation();
  const state = location.state as CardDetails // Type casting, convert a variable from one type to another.
  
  const [cardData, setData] = useState(state)

  console.log(cardData);
  
  return (
    <section className='cardDetail'>
      {/* Find font for title */}

      <div className='cardDetail_card'>
        <h2>{cardData.name} Tarot Card Meanings</h2>
        <img src={`http://localhost:3000/assets/cards/${cardData.img}`}/>
      </div>
      
      <div className="cardDetail_info">
        <h3 className='cardDetail_info_desc'>Mythical/Spiritual Meaning</h3>
        <p className='cardDetail_info_txt'>{cardData['Mythical/Spiritual']}</p>

        <h3 className='cardDetail_info_desc'>{cardData.name} position meanings.</h3>
        <p className='cardDetail_info_txt'><strong>Upright: </strong>{cardData.meanings.light.map(m => ` ${m},`)}</p>
        <p className='cardDetail_info_txt'><strong>Upside Down: </strong>{cardData.meanings.shadow.map(m => ` ${m},`)}</p>

        <h3 className='cardDetail_info_desc'>Keywords</h3>
        <p className='cardDetail_info_txt'>{cardData.keywords.map(m => ` ${m},`)}</p>

        <h3 className='cardDetail_info_desc'>Fortunes</h3>
        <p className='cardDetail_info_txt'>{cardData.fortune_telling.map(m => ` ${m},`)}</p>

        <h3 className='cardDetail_info_desc'>Common Questions</h3>
        <p className='cardDetail_info_txt'>{cardData['Questions to Ask'].map((m, idx) => `${idx + 1}.) ${m} `)}</p>
      </div>


    </section>
  )
}
