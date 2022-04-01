import React, {useState, useEffect} from 'react';
import './App.css';
import { Tarot } from './model';
import tarotJson from './tarot.json'

console.log(tarotJson);

let t: Tarot = tarotJson

function App() {
  const [initload, setInit] = useState<boolean>(true)
  const [tarot, setTarot] = useState<Tarot>()

  console.log(tarot && tarot.cards);

  useEffect(() => {
    if(initload) {
      setTarot(t)
      setInit(false)
    }
  })
  
  

  return (
    <div className="App">
      {tarot && tarot.cards.map(card => (
        <img src={`http://localhost:3000/assets/cards/${card.img}`}/> 
      ))}
      
    </div>
  );
}

export default App;
