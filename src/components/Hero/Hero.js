import React from 'react'
import Title from '../Title/Title'
import './Hero.css'

const Hero = () => {
  return (
    <section className='heroContainer'>
      <article className='leftHeroSection'>
        <Title>Section Title</Title>
      </article>
      <article className='rightHeroSection'>
        <Title>Section Title</Title>
      </article>
    </section>
  )
}

export default Hero
