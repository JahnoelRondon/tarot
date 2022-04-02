import React, {useState, useEffect} from 'react';
import './App.css';
import { Tarot } from './model';
import tarotJson from './tarot.json'
// Components
import {Search} from './components/Search'
import {CardList} from './components/CardList'

console.log(tarotJson);

let t: Tarot = tarotJson

function App() {

  const [initload, setInit] = useState<boolean>(true)
  const [tarot, setTarot] = useState<Tarot>()
  const [searchField, setSearch] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <h1>Tarot Helper</h1>

      <Search handleChange={handleChange} />
      {filteredCard && <CardList filteredCards={filteredCard}/>}
    </div>
  );
}

export default App;
