import React from 'react'
import CardDeck from '../../components/CardDeck'
import ContentSection from '../../components/ContentSection'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

import './Home.css'
const Home = () => {
  return (
    <main className='homePage'>
      <Header />
      <Hero />
      <ContentSection variant='a'>
        <CardDeck />
      </ContentSection>
      <ContentSection>
        <CardDeck />
      </ContentSection>
    </main>
  )
}

export default Home
