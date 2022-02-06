import React from 'react'
import './CardDeck.css'

const CardDeck = ({ children }) => {
  return <section className='carddeckContainer'>{children}</section>
}

export default CardDeck
