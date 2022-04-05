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
  trump: 'trumps are',
  cups: 'cups are',
  swords: 'swords are',
  wands: 'wands are',
  pentacles: 'pentacles are',
}
