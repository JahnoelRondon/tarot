import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { CardDetails } from '../../../model'
import './detail.css'

export const CardPage = () => {

  const location = useLocation();
  const state = location.state as CardDetails // Type casting, convert a variable from one type to another.
  
  const [cardData, setData] = useState(state)
  
  return (
    <>
      <h2 className='cardTitle'>{cardData.name} Tarot Card Meanings</h2>
      <section className='cardDetail'>
        {/* Find font for title */}

        <div className='cardDetail_card'>
          <img src={`http://localhost:3000/assets/cards/${cardData.img}`}/>
        </div>
        
        <div className="cardDetail_info">

          <div className="cardDetail_infoSection">
            <h3 className='cardDetail_info_desc'>Mythical/Spiritual Meaning</h3>
            <p className='cardDetail_info_txt'>{cardData['Mythical/Spiritual']}</p>
          </div>

          <div className="cardDetail_infoSection">
            <h3 className='cardDetail_info_desc'>{cardData.name} position meanings.</h3>
            <p className='cardDetail_info_txt'><strong>Upright: </strong>{cardData.meanings.light.map(m => ` ${m},`)}</p>
            <p className='cardDetail_info_txt'><strong>Upside Down: </strong>{cardData.meanings.shadow.map(m => ` ${m},`)}</p>
          </div>

          <div className="cardDetail_infoSection">
            <h3 className='cardDetail_info_desc'>Keywords</h3>
            <p className='cardDetail_info_txt'>{cardData.keywords.map(m => ` ${m},`)}</p>
          </div>

          <div className="cardDetail_infoSection">
            <h3 className='cardDetail_info_desc'>Fortunes</h3>
            <p className='cardDetail_info_txt'>{cardData.fortune_telling.map(m => ` ${m},`)}</p>
          </div>

          <div className="cardDetail_infoSection">
            <h3 className='cardDetail_info_desc'>Common Questions</h3>
            {cardData["Questions to Ask"].map((string, idx) => (
              <p key={idx} className='cardDetail_info_txt'><strong>{`${idx + 1}.)`}</strong>{` ${string}`}</p>
            ))}
          </div>

        </div>

      </section>
    </>
  )
}
