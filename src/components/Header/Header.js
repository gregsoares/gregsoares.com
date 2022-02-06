import React from 'react'
import MenuLink from '../MenuLink/MenuLink'
import Logo from '../Logo'
import './Header.css'

const Header = () => (
  <header className='headerContainer'>
    <Logo />
    <article className='links'>
      <MenuLink text='Home' link={'/'} />
      <MenuLink text='About Me' link={'/aboutme'} />
    </article>
  </header>
)

export default Header
