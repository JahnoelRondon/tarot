import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import { Tarot } from './model';
import tarotJson from './tarot.json'
// Components
import {NavBar} from './components/NavBar/NavBar'
import {Main} from './components/Pages/Main'
import {CardPage} from './components/Pages/CardPage'

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
  
  return (
    <div className="App">
      <NavBar />

       <Routes>

        <Route path='/' element={
          <Main handleChange={handleChange} filteredCard={filteredCard}/>
          }
        />

        <Route path='/card' element={<CardPage />}/>
        
       </Routes>

    </div>
  );
}

export default App;
