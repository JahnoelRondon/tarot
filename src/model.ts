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
