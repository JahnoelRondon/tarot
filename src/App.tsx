import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import { Tarot, Card } from './model';
import tarotJson from './tarot.json'
// Components
import {NavBar} from './components/NavBar/NavBar'
import {Main} from './components/Pages/Main'
import {CardPage} from './components/Pages/CardPage/CardPage'
import {Suit} from './components/Pages/SuitsPage/Suit'

let t: Tarot = tarotJson

function App() {

  const [initload, setInit] = useState<boolean>(true)
  const [tarot, setTarot] = useState<Tarot>()
  const [cards, setCards] = useState<Card[]>()
  const [searchField, setSearch] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const filteredCards = tarot?.cards.filter(card => {
    return card.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
  })

  const suitCategory = (suit: string) => {
    
    const suitcards = tarot?.cards.filter(card => {
      return card.suit.toLocaleLowerCase().includes(suit.toLocaleLowerCase());
    })

    setCards(suitcards)
  }
  
  useEffect(() => {
    if(initload) {
      setTarot(t)
      setInit(false)
    }
  })
  
  return (
    <div className="App">
      
      <NavBar 
        suitCategory={suitCategory}
      />

       <Routes>

        <Route path='/' element={
          <Main handleChange={handleChange} cardsListed={filteredCards} searchField={searchField}/>
          }
        />

        <Route path='/card' element={<CardPage />}/>

        <Route path='/suit' element={<Suit cards={cards} />}/>
        
       </Routes>

    </div>
  );
}

export default App;
