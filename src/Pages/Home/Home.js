import React from 'react'
import CardDeck from '../../components/CardDeck'
import LeftContentSection from '../../components/LeftContentSection'
import RightContentSection from '../../components/RightContentSection'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

import './Home.css'

const Home = () => {
  return (
    <main className='homePage'>
      <Header />
      <Hero />
      <LeftContentSection variant='a'>
        <CardDeck />
      </LeftContentSection>
      <RightContentSection></RightContentSection>
    </main>
  )
}

export default Home
