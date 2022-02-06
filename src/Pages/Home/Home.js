import React from 'react'
import ContentSection from '../../components/ContentSection'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Title from '../../components/Title/Title'

import './Home.css'
const Home = () => {
  return (
    <main className='homePage'>
      <Header />
      <Hero />
      <ContentSection variant='a'>
        <Title>Section One</Title>
      </ContentSection>
      <ContentSection>
        <Title>Section Two</Title>
      </ContentSection>
    </main>
  )
}

export default Home
