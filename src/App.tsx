import React, {useState, useEffect} from 'react';
import './App.css';
import { Tarot } from './model';
import tarotJson from './tarot.json'

console.log(tarotJson);

let t: Tarot = tarotJson

function App() {

  const [initload, setInit] = useState<boolean>(true)
  const [tarot, setTarot] = useState<Tarot>()
  const [searchField, setSearch] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const filteredCard = tarot?.cards.filter(card => {
    return card.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
  })

  useEffect(() => {
    if(initload) {
      setTarot(t)
      setInit(false)
    }
  })

  console.log(filteredCard);
  

  return (
    <div className="App">
      <input type='search' onChange={onChange}/>
      {tarot && tarot.cards.map(card => (
        <img key={card.name} src={`http://localhost:3000/assets/cards/${card.img}`}/> 
      ))}
    </div>
  );
}

export default App;
