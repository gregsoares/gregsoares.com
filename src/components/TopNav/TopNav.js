import React from 'react'
import Text from '../Text/Text'
import Title from '../Title/Title'
import './TopNav.css'

const TopNav = () => {
  return (
    <nav className='TopNavContainer'>
      <div className='navLogoContainer'>
        <Title>GregSoares.com</Title>
      </div>
      <section aria-label='Navigation Link List' className='navLinkList'>
        <Text className='navLink'>Home</Text>
        <Text className='navLink'>Projects</Text>
        <Text className='navLink'>About Me</Text>
      </section>
    </nav>
  )
}

export default TopNav
