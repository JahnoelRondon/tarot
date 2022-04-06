export interface Card {
  name: string
  img: string
  suit: string
}

export interface Tarot{
  cards: Card[]
}

interface Meanings {
  light: string[]
  shadow: string[]
}

export interface CardDetails {
  name: string
  img: string
  meanings: Meanings
  keywords: string[]
  // use bracket notation to access
  'Mythical/Spiritual': string
  'Questions to Ask': string[]
  fortune_telling: string[]
}

interface Suits {
  trump: string
  cups: string
  swords: string 
  wands: string 
  pentacles: string
}

export let suit: Suits = {
  trump: `
    The Trumps cards (also known as Major Arcana) signify "above all". The Major Arcana cards are not like the
     Minors—while the Minors can be pretty specific (focusing on actual situations, feelings, etcetera), the 
     Majors are more about energy fields and influences. They may reflect a spiritual search, attainment or 
     life lesson. Sometimes they reflect forces beyond our control. They warn us that resistance is futile, and 
     that we need to adjust our perception or increase understanding and acceptance.
  `,
  cups: `
    The Cups are represented as clergymen or statesmen.
    Cups are connected to emotions, and relationships with others and self.
  `
    ,
  swords: `
    The Swords are represented by the noblility or persons who held their rank by military service.
    Swords are connected to the intellect and communication.
  `
    ,
  wands: `
    The Wands or (Clubs) are represented by the peasants and working class.
    The Wands are connected to inspiration and action.
  `
    ,
  pentacles: `
    The Pentacles or (Coins) represented tradesmen and the industrial class.
    Pentacles are connected to the material world, work, health, money.
  `
    ,
}
